'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GraciasPage() {
  const openWhatsApp = () => {
    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '503XXXXXXXX'
    const waMessage = encodeURIComponent('Hola, acabo de enviar el formulario de contacto y me gustaría acelerar el proceso.')
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="Apex Code Labs"
            width={150}
            height={50}
            className="h-12 w-auto mx-auto"
          />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
          ¡Gracias por contactarnos!
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Hemos recibido tu mensaje y nos pondremos en contacto contigo dentro de las próximas 24 horas 
          para discutir tu proyecto y cómo podemos ayudarte a impulsar tu empresa con nuestras soluciones.
        </p>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">
            ¿Qué sigue?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-2">
                  Revisión
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Analizaremos tu solicitud y prepararemos una propuesta inicial
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-2">
                  Contacto
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Te contactaremos para agendar una llamada de descubrimiento
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-2">
                  Propuesta
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Presentaremos una solución personalizada para tu empresa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={openWhatsApp}
            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
            </svg>
            <span>Acelerar por WhatsApp</span>
          </button>
          
          <Link
            href="/"
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          <p className="mb-2">
            Si tienes alguna pregunta urgente, no dudes en contactarnos directamente:
          </p>
          <p>
            <a href="mailto:contacto@apexcodelabs.com" className="hover:text-primary transition-colors">
              contacto@apexcodelabs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
