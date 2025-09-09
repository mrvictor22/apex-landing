'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        <div className="py-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <Image
                  src="/logowh.svg"
                  alt="Apex Code Labs"
                  width={180}
                  height={180}
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-44 lg:w-44"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Automatizamos tus procesos y escalamos tu operación con soluciones a medida: 
                desde marketing con CRM hasta ERPs y facturación electrónica en El Salvador, 
                potenciadas por IA.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/apex-code-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/apexcodelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    Marketing con CRM
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    ERP - Administración
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    Facturación Electrónica
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    Automatizaciones IA
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  <span className="block">Email:</span>
                  <a href="mailto:contacto@apexcodelabs.com" className="hover:text-accent transition-colors">
                    contacto@apexcodelabs.com
                  </a>
                </li>
                <li className="text-gray-300">
                  <span className="block">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '503XXXXXXXX'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    +{process.env.NEXT_PUBLIC_WA_NUMBER || '503 XXXX-XXXX'}
                  </a>
                </li>
                <li className="text-gray-300">
                  <span className="block">Ubicación:</span>
                  <span>El Salvador</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-400 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Apex Code Labs. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/politica-privacidad"
                className="text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Política de Privacidad
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
