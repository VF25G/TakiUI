module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
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
        children: ['/components/button']
      }
    ]
  }
}