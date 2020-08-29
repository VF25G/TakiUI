const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('accept autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      Vue.config.errorHandler = done
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('accept closeButton', (done) => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'message string',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('message string')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)

    })
    it('accept enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: { enableHtml: true }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('accept position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: { position: 'bottom' }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})