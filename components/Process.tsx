'use client'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      details: ['Auditoría de procesos', 'Análisis de necesidades', 'Definición de objetivos', 'Propuesta personalizada']
    },
    {
      number: '02',
      title: 'Prototipo',
      description: 'Desarrollamos un prototipo funcional para validar la solución antes de la implementación completa.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      details: ['Diseño de solución', 'Desarrollo de MVP', 'Pruebas iniciales', 'Validación con cliente']
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Desplegamos la solución completa, capacitamos a tu equipo y brindamos soporte continuo.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: ['Desarrollo completo', 'Integración con sistemas', 'Capacitación del equipo', 'Soporte continuo']
    }
  ]

  return (
    <section id="proceso" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un enfoque estructurado y probado para garantizar el éxito de tu proyecto
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full border-4 border-primary flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="card p-6 h-full group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿Listo para comenzar tu transformación digital?
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
            Iniciar proyecto
          </button>
        </div>
      </div>
    </section>
  )
}
