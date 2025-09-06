# Apex Code Labs - Landing Page

Una landing page moderna y optimizada para Apex Code Labs, especializada en automatización con IA, CRM, ERP y facturación electrónica en El Salvador.

## 🚀 Características

- **Next.js 14** con App Router
- **TailwindCSS** para estilos modernos y responsivos
- **TypeScript** para desarrollo tipado y seguro
- **SEO optimizado** con meta tags, OpenGraph y JSON-LD schema
- **Formulario de contacto** con integración a Resend y webhooks N8N
- **WhatsApp flotante** para contacto directo
- **Dark/Light mode** automático basado en preferencias del sistema
- **Rendimiento optimizado** para Core Web Vitals
- **Accesibilidad WCAG AA** compliant

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn
- Cuenta de Resend (opcional, para emails)
- N8N instance (opcional, para automatizaciones)

## 🛠️ Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd apex-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   # Email (Resend recomendado)
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=contacto@apexcodelabs.com
   CONTACT_FROM_EMAIL=no-reply@apexcodelabs.com
   
   # WhatsApp
   NEXT_PUBLIC_WA_NUMBER=503XXXXXXXX
   NEXT_PUBLIC_WA_MSG=Hola Apex Code Labs, quiero información.
   
   # Opcional: N8N Webhook
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact-form
   
   # Opcional: Analytics
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=apexcodelabs.com
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en navegador**
   ```
   http://localhost:3000
   ```

## 📧 Configuración de Email

### Opción 1: Resend (Recomendado)

1. Crear cuenta en [Resend](https://resend.com)
2. Generar API key
3. Agregar `RESEND_API_KEY` a `.env.local`
4. Configurar dominio verificado (opcional para producción)

### Opción 2: SMTP Fallback

Si no usas Resend, configura SMTP:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🤖 Integración N8N (Opcional)

Para automatizar flujos de WhatsApp o CRM:

1. Configurar webhook en N8N
2. Agregar `N8N_WEBHOOK_URL` a `.env.local`
3. El formulario enviará datos automáticamente al webhook

Payload enviado:
```json
{
  "name": "Juan Pérez",
  "company": "Mi Empresa",
  "email": "juan@miempresa.com",
  "phone": "+503 1234-5678",
  "country": "El Salvador",
  "service": "Marketing con CRM",
  "message": "Necesito implementar un CRM...",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "source": "apex-landing-contact-form"
}
```

## 📱 WhatsApp Integration

El botón flotante y CTAs abren WhatsApp con mensaje prellenado:

```env
NEXT_PUBLIC_WA_NUMBER=503XXXXXXXX  # Sin el símbolo +
NEXT_PUBLIC_WA_MSG=Hola Apex Code Labs, quiero información.
```

## 🎨 Personalización

### Colores y Branding

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: '#0E3A4A',    // Azul petróleo
  secondary: '#5DA0B5',  // Azul claro  
  accent: '#00C389',     // Verde
  // ...
}
```

### Logo

Reemplaza `/public/logo.svg` con tu logo personalizado.

### Contenido

#### Servicios
Edita `components/Services.tsx` para modificar los 4 servicios principales.

#### FAQ
Actualiza `components/FAQ.tsx` con preguntas específicas de tu negocio.

#### Proceso
Modifica `components/Process.tsx` para reflejar tu metodología.

#### Copy/Textos
Los textos principales están en:
- `components/Hero.tsx` - Headline y propuesta de valor
- `components/Services.tsx` - Descripciones de servicios
- `components/FAQ.tsx` - Preguntas frecuentes

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio**
   - Importar proyecto en Vercel
   - Conectar con GitHub/GitLab

2. **Configurar variables de entorno**
   - Agregar todas las variables de `.env.local` en Vercel
   - Configurar dominio personalizado

3. **Deploy**
   ```bash
   npm run build  # Verificar que compile sin errores
   ```

### Otras plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway  
- DigitalOcean App Platform
- AWS Amplify

## 📊 Analytics

### Plausible (Recomendado)

1. Crear cuenta en [Plausible](https://plausible.io)
2. Agregar dominio
3. Configurar `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` en variables de entorno

### Google Analytics

Para usar GA4, agrega el script en `app/layout.tsx`:

```typescript
{process.env.NEXT_PUBLIC_GA_ID && (
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  />
)}
```

## 🔒 Seguridad

- **Rate limiting** implementado en API routes
- **Honeypot** para prevenir spam
- **Validación** de datos en cliente y servidor
- **HTTPS** requerido en producción
- **Headers de seguridad** configurados

## 📈 Rendimiento

- **Core Web Vitals** optimizados
- **Imágenes** optimizadas con `next/image`
- **Fuentes del sistema** para carga rápida
- **CSS crítico** inlineado
- **Lazy loading** automático

## 🧪 Testing

```bash
# Lint
npm run lint

# Build test
npm run build

# Lighthouse CI (opcional)
npx @lhci/cli@0.12.x autorun
```

## 📝 Estructura del Proyecto

```
apex-landing/
├── app/
│   ├── api/contact/route.ts      # API endpoint para formulario
│   ├── gracias/page.tsx          # Página de agradecimiento
│   ├── politica-privacidad/      # Política de privacidad
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal con SEO
│   └── page.tsx                  # Página principal
├── components/
│   ├── Header.tsx                # Navegación principal
│   ├── Hero.tsx                  # Sección hero con CTAs
│   ├── Services.tsx              # 4 servicios principales
│   ├── Process.tsx               # Proceso en 3 pasos
│   ├── FAQ.tsx                   # Preguntas frecuentes
│   ├── ContactForm.tsx           # Formulario de contacto
│   ├── Footer.tsx                # Footer con links
│   └── WhatsAppFloat.tsx         # Botón flotante de WhatsApp
├── lib/
│   ├── email.ts                  # Lógica de envío de emails
│   └── schema.ts                 # JSON-LD schemas para SEO
├── public/
│   └── logo.svg                  # Logo de la empresa
├── .env.local.example            # Variables de entorno ejemplo
└── README.md                     # Esta documentación
```

## 🐛 Troubleshooting

### Error: "Cannot find module 'resend'"

```bash
npm install resend
```

### Error: Variables de entorno no definidas

Verifica que `.env.local` existe y tiene las variables correctas.

### Formulario no envía emails

1. Verificar `RESEND_API_KEY` es válida
2. Comprobar `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL`
3. Revisar logs en Vercel/consola

### WhatsApp no abre

Verificar formato de `NEXT_PUBLIC_WA_NUMBER` (sin + ni espacios).

## 📞 Soporte

Para soporte técnico o consultas:

- **Email**: contacto@apexcodelabs.com
- **WhatsApp**: +503 XXXX-XXXX
- **Website**: https://apexcodelabs.com

## 📄 Licencia

© 2024 Apex Code Labs. Todos los derechos reservados.

---

**¿Necesitas personalización adicional?** Contacta con nuestro equipo para servicios de desarrollo y consultoría.
