export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apex Code Labs",
    "url": "https://apexcodelabs.com",
    "logo": "https://apexcodelabs.com/logo.svg",
    "description": "Automatizamos tus procesos y escalamos tu operación con soluciones a medida: desde marketing con CRM hasta ERPs y facturación electrónica en El Salvador, potenciadas por IA.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SV"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+503-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/apex-code-labs",
      "https://twitter.com/apexcodelabs"
    ]
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización con IA y Desarrollo de Software",
    "provider": {
      "@type": "Organization",
      "name": "Apex Code Labs"
    },
    "description": "Servicios de automatización con IA, implementación de CRM, ERP y facturación electrónica",
    "serviceType": "Software Development",
    "areaServed": {
      "@type": "Country",
      "name": "El Salvador"
    }
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Apex Code Labs",
    "url": "https://apexcodelabs.com",
    "description": "Impulsa tu empresa con IA, CRM, ERP y Facturación Electrónica",
    "inLanguage": "es-SV",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://apexcodelabs.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}
