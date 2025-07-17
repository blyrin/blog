import { defineConfig } from 'vitepress'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import llmstxt from 'vitepress-plugin-llms'
import { nav, sidebar } from './links.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: 'blyrin | 布铃酱的点心铺',
  description: '布铃酱的点心铺',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar_transparent.webp',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/blyrin' },
    ],
    footer: {
      message: '😺 萌ICP备20237722号',
    },
    docFooter: {
      prev: '👈 上一个',
      next: '下一个 👉',
    },
    outline: {
      label: '❤️ 点我跳转 ❤️',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },
    returnToTopLabel: '飞回去 ☝️',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '变白！',
    darkModeSwitchTitle: '变黑！',
  },
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
      modulePreload: { polyfill: true },
    },
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 90,
        },
        jpeg: {
          quality: 90,
        },
        jpg: {
          quality: 90,
        },
        tiff: {
          quality: 90,
        },
        webp: {
          lossless: true,
        },
        avif: {
          lossless: true,
        },
      }),
      pagefindPlugin({
        btnPlaceholder: '开搜',
        placeholder: '找找看',
        emptyText: '空空如也',
        heading: '共 {{searchResult}} 条结果',
        customSearchQuery(input) {
          const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
          const segments = segmenter.segment(input)
          const result = []
          for (const it of segments) {
            if (it.isWordLike) {
              result.push(it.segment)
            }
          }
          return result.join(' ')
        },
      }),
      llmstxt({
        title: '布铃 blyrin',
        description: '布铃酱的点心铺',
        details: '有关各种编程主题相关文章和教程的集合',
        domain: 'https://blyrin.cn',
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        generateLLMFriendlyDocsForEachPage: false,
        customLLMsTxtTemplate: '# {title}\n\n{description}\n\n{details}\n\n**View `/llms-full.txt` for full documentation bundle**\n',
        ignoreFiles: [
          'nav/*',
          'about/*',
        ],
        injectLLMHint: true,
        excludeIndexPage: true,
      }),
    ],
  },
})
