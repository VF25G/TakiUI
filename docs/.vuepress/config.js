module.exports = {
  base: '/webUI/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '交流', link: 'https://google.com'}
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get_started/'
        ]
      },
      {
        title: '组件',
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