<template>
  <div style="padding-top: 8px">
    <h2>简单用法</h2>

    <p>
      <strong>预览</strong>
    </p>

    <g-input value="中文"></g-input>
    <g-input value="禁用" disabled></g-input>
    <g-input value="只读" readonly></g-input>
    <g-input value="错误" error="错误信息"></g-input>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{inputCode}}</code></pre>
    </div>

    <h2>双向绑定</h2>

    <p>
      <strong>预览</strong>
    </p>

    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>


    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{bindDataHTMLCode}}</code></pre>
    </div>

    <p>
      <strong>JS代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="js">{{bindDataJSCode}}</code></pre>
    </div>

  </div>
</template>
<script>
  import GInput from '../../../src/input'

  export default {
    components: {GInput},
    data() {
      return {
        value: 'Hello webUI',
        inputCode: `
          <g-input value="中文"></g-input>
          <g-input value="禁用" disabled></g-input>
          <g-input value="只读" readonly></g-input>
          <g-input value="错误" error="错误信息"></g-input>
        `.replace(/^ {8}/gm, '').trim(),

        bindDataHTMLCode: `
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim(),

        bindDataJSCode:`
          data(){
            return {
              value: 'Hello webUI',
              // ...
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>