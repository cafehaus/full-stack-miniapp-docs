module.exports = {
  title: '微慕全栈小程序',
  description: '微慕全栈小程序开发体验版文档',
  base: '/full-stack-miniapp-docs/',
  head: [
    [ 'link', { rel: 'shortcut icon', href: '/full-stack-miniapp-docs/logo.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: '官网', link: 'https://minapper.com' },
      { text: 'Gitee', link: 'https://gitee.com/cafehaus/full-stack-miniapp-docs' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '完整课程', link: '/guide/完整课程/' },
          ],
        },
        {
          text: 'UI设计',
          collapsed: false,
          items: [
            { text: '设计工具', link: '/guide/design/设计工具/' },
            { text: '界面设计', link: '/guide/design/界面设计/' },
          ],
        },
        {
          text: '后端-wordpress插件开发',
          collapsed: false,
          items: [
            { text: '插件开发和项目模板', link: '/guide/back-end/插件开发和项目模板/' },
            { text: 'PHP语法基础', link: '/guide/back-end/PHP语法基础/' },
            { text: '文章列表接口开发', link: '/guide/back-end/文章列表接口开发/' },
            { text: '文章详情接口开发', link: '/guide/back-end/文章详情接口开发/' },
          ],
        },
        {
          text: '前端-uniapp小程序开发',
          collapsed: false,
          items: [
            { text: '前端开发基础', link: '/guide/front-end/前端开发基础/' },
            { text: 'vue和uniapp开发基础', link: '/guide/front-end/vue和uniapp开发基础/' },
            { text: '项目介绍和搭建', link: '/guide/front-end/项目介绍和搭建/' },
            { text: '文章列表开发', link: '/guide/front-end/文章列表开发/' },
            { text: '文章详情开发', link: '/guide/front-end/文章详情开发/' },
            { text: '打包小程序和安卓APP', link: '/guide/front-end/打包小程序和安卓APP/' },
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            { text: '首页', link: '/config/' },
            { text: 'One', link: '/config/one' },
          ],
        },
      ],
    },
  },
}
