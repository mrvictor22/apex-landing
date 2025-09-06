'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '503XXXXXXXX'
    const waMessage = encodeURIComponent(process.env.NEXT_PUBLIC_WA_MSG || 'Hola Apex Code Labs, quiero información.')
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')
  }

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
            Impulsa tu empresa con{' '}
            <span className="text-accent">IA</span>,{' '}
            <span className="text-secondary">CRM</span>,{' '}
            <span className="text-accent">ERP</span> y{' '}
            <span className="text-secondary">Facturación Electrónica</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Automatizamos tus procesos y escalamos tu operación con soluciones a medida: 
            desde marketing con CRM hasta ERPs y facturación electrónica en El Salvador, 
            potenciadas por IA.
          </p>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-1">
                  Automatizaciones con modelos de punta
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  ChatGPT, Claude, Gemini y Grok
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-1">
                  Implementaciones rápidas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Medibles y seguras
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white mb-1">
                  Integraciones perfectas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Con tus sistemas actuales
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Solicitar asesoría
            </button>
            <button
              onClick={openWhatsApp}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
              </svg>
              <span>Hablar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
