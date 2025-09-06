'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/ChatGPT Image 7 abr 2025, 21_07_03.png"
              alt="Apex Code Labs"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-primary"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('proceso')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary w-full text-center"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
