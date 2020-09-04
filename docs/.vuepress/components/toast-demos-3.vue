<template>
  <div style="padding-top: 8px">
    <h2>支持HTML</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-button @click="showHTMLMessage">上方弹出</t-button>
    <t-button @click="showHTMLMessage2">中间弹出</t-button>

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
  import TButton from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {
      't-button': TButton
    },
    mixins: [mixin],
    data() {
      return {
        value: 'Hello webUI',
        toastCode: `
          <t-button @click="showHTMLMessage">
            上方弹出
          </t-button>
          <t-button @click="showHTMLMessage2">
            中间弹出
          </t-button>
        `,
        JSCode: `
          showHTMLMessage() {
            this.$toast('<strong style="color: #999999">山川异域</strong>',{
              enableHtml: true
            })
          },
          showHTMLMessage2() {
            this.$toast('<strong style="color: #999999">风月同天</strong>',{
              enableHtml: true,
              position: 'middle'
            })
          }
        `,
        CSSCode: `
          .webUI-toast {
            z-index: 20;
          }
        `
      }
    },
    methods: {
      showHTMLMessage() {
        this.$toast('<strong style="color: #999999">山川异域</strong>',{
          enableHtml: true
        })
      },
      showHTMLMessage2() {
        this.$toast('<strong style="color: #999999">风月同天</strong>',{
          enableHtml: true,
          position: 'middle'
        })
      }
    }
  }
</script>

<style>
  .webUI-toast {
    z-index: 20;
  }
</style>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>