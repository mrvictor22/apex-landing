import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, triggerN8nWebhook, type ContactFormData } from '@/lib/email'

// Rate limiting (simple in-memory store - for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_MAX = 5 // Max requests per window
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  if (!record) {
    rateLimitMap.set(key, { count: 1, lastReset: now })
    return false
  }

  // Reset if window has passed
  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now })
    return false
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX) {
    return true
  }

  // Increment count
  record.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate required fields
    const { name, company, email, phone, country, service, message } = body

    if (!name || !company || !email || !country || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare contact data
    const contactData: ContactFormData = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      country: country.trim(),
      service: service.trim(),
      message: message.trim()
    }

    // Send email
    const emailResult = await sendContactEmail(contactData)
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    // Trigger N8N webhook (optional, don't fail if this doesn't work)
    let webhookResult: { success: boolean; error?: string } = { success: true }
    if (process.env.N8N_WEBHOOK_URL) {
      webhookResult = await triggerN8nWebhook(contactData)
      if (!webhookResult.success) {
        console.warn('N8N webhook failed:', webhookResult.error || 'Unknown error')
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      emailSent: emailResult.success,
      webhookTriggered: webhookResult.success
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
