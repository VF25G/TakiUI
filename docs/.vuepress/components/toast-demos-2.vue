<template>
  <div style="padding-top: 8px">
    <h2>自定义提示框</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-button @click="() => {onClickButton('今天的风儿好喧嚣啊')}">上方弹出</t-button>
    <t-button @click="() => {onClickButton('这风儿欲有略略鸣泣', 'middle')}">中间弹出</t-button>
    <t-button @click="() => {onClickButton('今晚的月色真美', 'bottom')}">下方弹出</t-button>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(toastCode)}}</code></pre>
    </div>

    <p>
      <strong>JS代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="js">{{formatCode(JSCode)}}</code></pre>
    </div>

    <p>
      <strong>CSS</strong>
    </p>

    <div v-highlight>
      <pre><code class="css">{{formatCode(CSSCode)}}</code></pre>
    </div>

  </div>
</template>
<script>
  import mixin from '../mixin'
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {
      't-button': Button
    },
    mixins: [mixin],
    data() {
      return {
        value: 'Hello webUI',
        toastCode: `
          <t-button @click="() => {onClickButton('今天的风儿好喧嚣啊')}">
            上方弹出
          </t-button>
          <t-button @click="() => {onClickButton('这风儿欲有略略鸣泣', 'middle')}">
            中间弹出
          </t-button>
          <t-button @click="() => {onClickButton('今晚的月色真美', 'bottom')}">
            下方弹出
          </t-button>
        `,
        JSCode: `
          methods: {
            onClickButton(message, position = 'top') {
              this.$toast(message, {
                position: position,
                closeButton: {
                  text: '嗯',
                  callback: () => {
                    window.alert('男子高中生日常')
                  }
                }
              })
            }
          }
        `,
        CSSCode: `
          .taki-toast {
            z-index: 20;
          }
        `
      }
    },
    methods: {
      onClickButton(message, position = 'top') {
        this.$toast(message, {
          position: position,
          closeButton: {
            text: '嗯',
            callback: () => {
              window.alert('男子高中生日常')
            }
          }
        })
      }
    }
  }
</script>

<style>
  .taki-toast {
    z-index: 20;
  }
</style>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>