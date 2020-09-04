<template>
  <div style="padding-top: 8px">
    <h2>基本布局</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-layout style="color: white;">
      <t-header style="height: 50px; background:lightskyblue;">
        header
      </t-header>
      <t-content style="height: 100px; background:deepskyblue;">
        content
      </t-content>
      <t-footer style="height: 50px; background:lightskyblue;">
        footer
      </t-footer>
    </t-layout>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(inputCode)}}</code></pre>
    </div>

  </div>
</template>
<script>
  import mixin from '../mixin'
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Footer from '../../../src/footer'
  import Content from '../../../src/content'
  import Sider from '../../../src/sider'

  export default {
    components: {
      't-layout': Layout,
      't-header': Header,
      't-footer': Footer,
      't-content': Content,
      't-sider': Sider},
    mixins: [mixin],
    data() {
      return {
        value: 'Hello webUI',
        inputCode: `
          <t-layout style="color: white; margin-bottom:50px;">
            <t-header style="height: 50px; background:lightskyblue;">
              header
            </t-header>
            <t-content style="height: 100px; background:deepskyblue;">
              content
            </t-content>
            <t-footer style="height: 50px; background:lightskyblue;">
              footer
            </t-footer>
          </t-layout>
        `
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>