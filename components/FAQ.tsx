'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Qué tipos de automatizaciones con IA pueden implementar?',
      answer: 'Implementamos chatbots inteligentes, sistemas de clasificación automática de leads, copilots internos para equipos, automatización de procesos de marketing, análisis predictivo y mucho más. Trabajamos con los modelos más avanzados como ChatGPT, Claude, Gemini y Grok.'
    },
    {
      question: '¿Cuánto tiempo toma implementar un CRM o ERP?',
      answer: 'El tiempo varía según la complejidad y tamaño de tu empresa. Un CRM básico puede estar listo en 2-4 semanas, mientras que un ERP completo puede tomar 2-6 meses. Siempre comenzamos con un prototipo funcional en las primeras semanas para validar la solución.'
    },
    {
      question: '¿Ofrecen soporte para facturación electrónica en El Salvador?',
      answer: 'Sí, somos especialistas en facturación electrónica para El Salvador. Manejamos todo el proceso de cumplimiento legal, timbrado automático e integración con tus sistemas existentes. Nos encargamos de toda la complejidad técnica y legal.'
    },
    {
      question: '¿Pueden integrar las soluciones con nuestros sistemas actuales?',
      answer: 'Absolutamente. Una de nuestras fortalezas es la integración perfecta con sistemas existentes. Trabajamos con APIs, webhooks, bases de datos y cualquier tecnología que uses actualmente para asegurar una transición suave.'
    },
    {
      question: '¿Qué incluye el soporte post-implementación?',
      answer: 'Incluimos capacitación completa para tu equipo, documentación detallada, soporte técnico continuo, actualizaciones regulares y monitoreo del sistema. También ofrecemos planes de mantenimiento personalizados según tus necesidades.'
    },
    {
      question: '¿Trabajan con empresas de todos los tamaños?',
      answer: 'Sí, trabajamos desde startups hasta grandes corporaciones. Nuestras soluciones son escalables y se adaptan al tamaño y presupuesto de cada empresa. Siempre comenzamos con un análisis detallado para proponer la mejor solución.'
    },
    {
      question: '¿Cómo garantizan la seguridad de los datos?',
      answer: 'La seguridad es nuestra prioridad. Implementamos encriptación end-to-end, autenticación multifactor, backups automáticos y cumplimos con estándares internacionales de seguridad. Todos nuestros sistemas pasan por auditorías de seguridad regulares.'
    },
    {
      question: '¿Ofrecen capacitación para el equipo?',
      answer: 'Sí, la capacitación es parte integral de nuestro servicio. Incluimos sesiones de entrenamiento personalizadas, documentación completa, videos tutoriales y soporte continuo para asegurar que tu equipo aproveche al máximo las nuevas herramientas.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Contáctanos directamente
          </button>
        </div>
      </div>
    </section>
  )
}
