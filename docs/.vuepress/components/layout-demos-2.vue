<template>
  <div style="padding-top: 8px">
    <h2>中部侧栏</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section>
      <t-layout style="overflow: hidden;">
        <t-header style="height: 50px; background:#383e56; color: #eedad1">
          header
        </t-header>
        <t-layout>
          <t-sider style="height: 100px; background:#d4b5b0; width:200px;">
            sider
          </t-sider>
          <t-content style="height: 100px; background:#f69e7b;">
            content
          </t-content>
        </t-layout>
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
          <t-layout style="overflow: hidden;">
            <t-header style="height: 50px; background:#383e56; color: #eedad1">
              header
            </t-header>
            <t-layout>
              <t-sider style="height: 100px; background:#d4b5b0; width:200px;">
                sider
              </t-sider>
              <t-content style="height: 100px; background:#f69e7b;">
                content
              </t-content>
            </t-layout>
            <t-footer style="height: 50px; background:#eedad1;">
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
  .taki-header, .taki-content, .taki-footer, .taki-sider {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #383e56;
  }
</style>