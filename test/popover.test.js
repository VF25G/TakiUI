const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在', () => {
    expect(Popover).to.exist
  })

  it('accept position', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="top" ref="popoverTest">
        <template slot="content">
        pop content
        </template>
        <button>Click me</button>
      </g-popover>
    `

    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.popoverTest.$refs
      expect(contentWrapper.classList.contains('position-top')).to.be.true
      done()
    })
  })

  it('accept trigger', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover trigger="hover" ref="popoverTest">
        <template slot="content">
        pop content
        </template>
        <button>Click me</button>
      </g-popover>
    `

    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let event = new Event('mouseenter');
      vm.$refs.popoverTest.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.popoverTest.$refs
        expect(contentWrapper).to.exist
        done()
      })
    })
  })
})

