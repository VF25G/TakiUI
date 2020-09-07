<template>
  <div style="padding-top: 8px">
    <h2>基本布局</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section>
      <t-layout>
        <t-header style="height: 50px; background:#383e56;color: #eedad1;">
          header
        </t-header>
        <t-content style="height: 100px; background:#f69e7b;">
          content
        </t-content>
        <t-footer style="height: 50px; background:#eedad1;">
          footer
        </t-footer>
      </t-layout>
    </section>

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
          <t-layout style="color: white;">
            <t-header style="height: 50px; background:#84a9ac;">
              header
            </t-header>
            <t-content style="height: 100px; background:#3b6978;">
              content
            </t-content>
            <t-footer style="height: 50px; background:#204051;">
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

  .taki-header, .taki-content, .taki-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #383e56;
  }
</style>