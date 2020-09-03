<template>
  <div style="padding-top: 16px;">
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
    <!--    <pre><code>{{content}}</code></pre>-->
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    }
  }
</script>