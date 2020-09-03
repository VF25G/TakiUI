<template>
  <div>
    <h2>单个按钮</h2>

    <p>
      <strong>预览</strong>
    </p>

    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>

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

    <g-button-group>
      <g-button icon="left" icon-position="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>

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
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        buttonCode: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim(),

        buttonGroupCode: `
          <g-button-group>
            <g-button icon="left" icon-position="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
          </g-button-group>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>