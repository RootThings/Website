import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Root Things',
  description: 'Premium resources and guides for Android customization enthusiasts',
  lang: 'en-US',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#006C51' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Root Things' }],
    ['meta', { name: 'og:description', content: 'Premium resources for Android customization enthusiasts' }],
    ['meta', { name: 'og:image', content: 'https://rootthings.thesakshamsingla.com/logo.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Root Things',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modules', link: '/modules/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Support', link: '/support/' },
    ],
    sidebar: {
      '/modules/': [
        {
          text: 'Modules',
          items: [
            { text: 'Overview', link: '/modules/' },
            { text: 'Magisk Modules', link: '/modules/magisk' },
            { text: 'KernelSU Modules', link: '/modules/kernelsu' },
          ]
        }
      ],
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting Started', link: '/guides/' },
            { text: 'Rooting Guides', link: '/guides/rooting' },
            { text: 'Tweaking', link: '/guides/tweaking' },
            { text: 'Customization', link: '/guides/customization' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheSakshamSingla' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l.214.242 3.683 1.21.876-2.65c.394-.774.7-.513 1.024-.199l1.4 1.203-1.186 1.183-.89-2.95-2.641-.868z" fill="currentColor"/></svg>'
        },
        link: 'https://t.me/rootthings'
      }
    ],
    footer: {
      message: 'Made with ❤️ by TheSakshamSingla',
      copyright: 'Copyright © 2023-present Root Things'
    },
    
    // External data sources
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'rootthings'
    },
    
    // Customize appearance
    appearance: {
      darkmodeSwitch: true,
    },
    
    // Custom outline title
    outlineTitle: 'On this page',
    
    // Content configuration
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
    
    // Enhanced dev experience
    externalLinkIcon: true,
    
    // GitHub integration
    editLink: {
      pattern: 'https://github.com/TheSakshamSingla/root-things/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    // Last updated timestamp
    lastUpdatedText: 'Last Updated',
    
    // Customize search
    search: {
      provider: 'local'
    }
  }
})
