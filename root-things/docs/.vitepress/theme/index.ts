// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TelegramButton from './components/TelegramButton.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add TelegramButton to layout
      'layout-bottom': () => h(TelegramButton)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components if needed
  }
} satisfies Theme 