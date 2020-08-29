const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('accept selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="music">
      <g-tabs-head>
        <g-tabs-item name="movie">电影</g-tabs-item>
        <g-tabs-item name="music">音乐</g-tabs-item>
        <g-tabs-item name="anime">动画</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="movie">电影资讯</g-tabs-pane>
        <g-tabs-pane name="music">音乐资讯</g-tabs-pane>
        <g-tabs-pane name="anime">动画资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let activeTab = vm.$el.querySelector(`.tabs-item[data-name="music"]`)
      expect(activeTab.classList.contains('active')).to.be.true
      done()
    })
  })

  it('accept direction', () => {

  })
})