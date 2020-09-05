module.exports = {
  base: '/TakiUI/',
  title: 'Taki UI',
  description: '基于Vue2.0的轻型UI框架',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/VF25G/' },
      { text: '欢迎star', link: 'https://github.com/VF25G/TakiUI'  },
    ],
    sidebar: [
      { title:'介绍',
        collapsable: false,
        children:[
          '/introduce/',
        ],
      },
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get_started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ]
  }
}