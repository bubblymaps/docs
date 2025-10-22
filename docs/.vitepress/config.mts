import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bubbly Maps",

  description: "Platform documentation and API reference for Bubbly Maps.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Platform', link: '/platform/overview' },
      { text: 'API Reference', link: '/api-reference/user-api' }
    ],
    logo: 'https://bubblymaps.org/logo.png',
    sidebar: [
      {
        text: 'Platform',
        items: [
          { text: 'Platform Overview', link: '/platform/overview' },
          {
            text: 'Guides', link: '/platform/guides', collapsed: false, items: [
              { text: 'Your Account', link: '/platform/guides/your-account' },
              { text: 'Waypoints', link: '/platform/guides/waypoints' },
              { text: 'Reviews', link: '/platform/guides/reviews' },
              { text: 'Reports', link: '/platform/guides/reports' },
              { text: 'Bubbly Maps API', link: '/platform/guides/how-to-api' },
            ]
          },
          {
            text: 'Support Centre', link: '/platform/support', collapsed: false, items: [
              { text: 'Ban Appeals', link: '/platform/support/appeals' },
              { text: 'Contact Us', link: '/platform/support/contact' },
            ]
          },
          { text: 'Terms of Service', link: 'https://bubblymaps.org/terms' },
          { text: 'Privacy Policy', link: 'https://bubblymaps.org/privacy' }
        ]
      },

      {
        text: 'Developers',
        items: [
          { text: 'Self-hosting', link: '/docs/self-hosting' },

          {
            text: 'API Reference', collapsed: true,
            items: [
              { text: 'Waypoint API', link: '/api-reference/waypoint-api' },
              { text: 'Users API', link: '/api-reference/user-api' },
              { text: 'Report API', link: '/api-reference/report-api' },
              { text: 'Review API', link: '/api-reference/review-api' },
            ]
          },

          { text: 'Licensing & Credits', link: 'https://bubblymaps.org/credits' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://b.bubblymaps.org/github' },
      { icon: 'discord', link: 'https://b.bubblymaps.org/discord' }
    ],

    footer: {
      copyright: '© 2025 Linus Kang Software. CC BY-NC 4.0.'
    }
  },
})