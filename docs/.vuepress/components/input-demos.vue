<template>
  <div style="padding-top: 8px">
    <h2>简单用法</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-input value="中文"></t-input>
    <t-input value="禁用" disabled></t-input>
    <t-input value="只读" readonly></t-input>
    <t-input value="错误" error="错误信息"></t-input>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(inputCode)}}</code></pre>
    </div>

    <h2>双向绑定</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section>
      <t-input v-model="value"></t-input>
      <div style="margin: .5em;">
        value: {{value}}
      </div>
      <t-button @click="value+='!'">append '!'</t-button>
    </section>

    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(bindDataHTMLCode)}}</code></pre>
    </div>

    <p>
      <strong>JS代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="js">{{formatCode(bindDataJSCode)}}</code></pre>
    </div>

    <section>
      <h2>Attributes - 属性</h2>
      <p class="des">
        本组件支持v-model，组件将被渲染为
        <span class="code">input</span>标签，因此你可以使用所有的
        <span class="code">input</span>原生属性。
      </p>
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
            <td>disabled</td>
            <td class="des">禁用输入框</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td class="des">输入框只读</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          <tr>
            <td>error</td>
            <td class="des">输入框右侧提示错误信息</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>
<script>
  import mixin from '../mixin'
  import Input from '../../../src/input'
  import Button from '../../../src/button'

  export default {
    components: {
      't-button': Button,
      't-input':Input
    },
    mixins: [mixin],
    data() {
      return {
        value: 'Hello Taki UI',
        inputCode: `
          <t-input value="中文"></t-input>
          <t-input value="禁用" disabled></g-input>
          <t-input value="只读" readonly></g-input>
          <t-input value="错误" error="错误信息"></g-input>
        `,

        bindDataHTMLCode: `
          <t-input v-model="value"></t-input>
          <div style="margin: .5em;">
            value: {{value}}
          </div>
          <t-button @click="value+='!'">append '!'</t-button>
        `,

        bindDataJSCode:`
          data(){
            return {
              value: 'Hello Taki UI',
              // ...
            }
          }
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .taki-input-wrapper {
    margin-top: 0.2em;
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