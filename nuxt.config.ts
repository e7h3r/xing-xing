// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      title: 'Xing.sol', // This sets the default title for your website
      meta: [
        // Define the character set and viewport settings
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Add any other meta tags you need
        {
          name: 'description',
          content:
            'Xing Xing',
        },
        {
          name: 'keywords',
          content: 'tiktok',
        },
      ],
      link: [
        // Add any favicon or stylesheet links here
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  devtools: {
    enabled: false,
    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
