// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],
  css: ['@unocss/reset/tailwind-compat.css'],

  ssr: true,

  app: {
    head: {
      title: 'email2markdown — Vos emails, rangés et lisibles pour toujours',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'email2markdown se connecte à vos boîtes mail, sauvegarde chaque email en fichier texte, et range tout dans des dossiers. Simple, automatique, privé.' },
        { name: 'keywords', content: 'email, markdown, imap, conversion, archivage, local' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    baseURL: '/',
  },

  routeRules: {
    '/': { prerender: true },
    '/features': { prerender: true },
    '/about': { prerender: true },
  },
})
