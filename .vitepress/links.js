export const nav = [
  { text: '前台 🏠', link: '/' },
  { text: '文章 🤤', activeMatch: '/posts/', link: '/posts/' },
  { text: '笔记 🤓', activeMatch: '/notes/', link: '/notes/' },
  { text: '网址导航 🌏', activeMatch: '/nav/', link: '/nav/' },
  { text: '关于我 🤡', activeMatch: '/about/', link: '/about/' },
]

export const links = {
  posts: [
    { text: '工具推荐', link: '/posts/tools/' },
    { text: '安装使用 Scoop', link: '/posts/scoop/' },
    { text: 'JS 常见基础面试题', link: '/posts/js-qa/' },
    { text: 'JS 经典之眼见不一定为实', link: '/posts/js-wtf-eq/' },
    { text: 'CVE-2023-34092', link: '/posts/cve-2023-34092/' },
    { text: 'SpringBoot 3.2 尝鲜', link: '/posts/springboot-3_2/' },
    { text: '栢码项目面经', link: '/posts/itbaima-qa/' },
  ],
  notes: [
    { text: 'Markdown 语法速查', link: '/notes/markdown/' },
    { text: 'Starship 安装配置', link: '/notes/starship/' },
    { text: '系统运维和操作笔记', link: '/notes/system/' },
    { text: 'Windows 使用笔记', link: '/notes/windows/' },
    { text: 'Web 笔记', link: '/notes/web/' },
    { text: 'Vue 笔记', link: '/notes/vue/' },
    { text: 'Node.js 笔记', link: '/notes/nodejs/' },
    { text: 'Go 语言笔记', link: '/notes/go/' },
    { text: 'Kotlin 笔记', link: '/notes/kotlin/' },
    { text: 'ungoogled chromium 安装配置', link: '/notes/ungoogled-chromium/' },
    { text: 'VMware Workstation 下载地址', link: '/notes/vmware-workstation-download/' },
  ],
}

export const sidebar = {
  '/posts/': [
    { text: '文章 🤤', link: '/posts/' },
    ...links.posts,
  ],
  '/notes/': [
    { text: '笔记 🤓', link: '/notes/' },
    ...links.notes,
  ],
}

export default { nav, sidebar }
