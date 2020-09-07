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

    <section>
      <h2>Attributes - 属性</h2>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th class="des">说明</th>
            <th class="type">类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>autoClose</td>
            <td class="des">自动关闭时长，可设置为false取消自动关闭</td>
            <td class="type">Boolean | Number</td>
            <td>——</td>
            <td>3</td>
          </tr>
          <tr>
            <td>closeButton</td>
            <td class="des">
              用于自定义关闭按钮的text以及callback。<br>
              text类型为String，callback必须为函数
            </td>
            <td class="type">Object</td>
            <td>test | callback</td>
            <td>{text: '关闭', callback: undefined}</td>
          </tr>
          <tr>
            <td>enableHTML</td>
            <td class="des">设置message是否支持原生HTML语法</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          <tr>
            <td>position</td>
            <td class="des">弹窗位置</td>
            <td class="type">String</td>
            <td>top | bottom | middle</td>
            <td>top</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

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
          .taki-toast {
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
  .taki-toast {
    z-index: 20;
  }
</style>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
  .attr {
    td {
      text-align:center;
    }
    .des {
      text-align: left;
    }
  }
</style>