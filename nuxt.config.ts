// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Enable static site generation for better deployment compatibility
  ssr: true,
  
  app: {
    head: {
      title: 'email2markdown - Convertissez vos emails en Markdown',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Convertissez facilement vos emails HTML en format Markdown. Simple, rapide et sécurisé.' },
        { name: 'keywords', content: 'email, markdown, conversion, html, text' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: '/'
  },
  
  // Ensure proper route rules for deployment
  routeRules: {
    '/': { prerender: true },
    '/features': { prerender: true },
    '/about': { prerender: true }
  }
})
