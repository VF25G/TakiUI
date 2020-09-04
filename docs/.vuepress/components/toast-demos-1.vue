<template>
  <div style="padding-top: 8px">
    <h2>提示框</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-button @click="$toast('点击弹出提示')">上方弹出</t-button>
    <t-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</t-button>
    <t-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</t-button>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(toastCode)}}</code></pre>
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
          <t-button @click="$toast('点击弹出提示')">
            上方弹出
          </t-button>
          <t-button @click="$toast('点击弹出提示', {position:'middle'})">
            中间弹出
          </t-button>
          <t-button @click="$toast('点击弹出提示', {position:'bottom'})">
            下方弹出
          </t-button>
        `,
        CSSCode: `
          .webUI-toast {
            z-index: 20;
          }
        `
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