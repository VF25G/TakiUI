<template>
  <div style="padding-top: 8px">
    <h2>单个按钮</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-button>默认按钮</t-button>
    <t-button icon="settings">默认按钮</t-button>
    <t-button :loading="true">默认按钮</t-button>
    <t-button disabled>默认按钮</t-button>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{buttonCode}}</code></pre>
    </div>

    <h2>组合按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <t-button-group>
      <t-button icon="left" icon-position="left">上一页</t-button>
      <t-button icon="right" icon-position="right">下一页</t-button>
    </t-button-group>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{buttonGroupCode}}</code></pre>
    </div>

  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      't-button': Button,
      't-button-group': ButtonGroup
    },
    data () {
      return {
        buttonCode: `
          <t-button>默认按钮</t-button>
          <t-button icon="settings">默认按钮</t-button>
          <t-button :loading="true">默认按钮</t-button>
          <t-button disabled>默认按钮</t-button>
      `.replace(/^ {8}/gm, '').trim(),

        buttonGroupCode: `
          <t-button-group>
            <t-button icon="left" icon-position="left">上一页</t-button>
            <t-button icon="right" icon-position="right">下一页</t-button>
          </t-button-group>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>