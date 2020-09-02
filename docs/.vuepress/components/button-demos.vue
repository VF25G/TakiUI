<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">Icon按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>加载按钮</g-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button
    },
    data() {
      return {
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">Icon按钮</g-button>
          <g-button :loading="true">加载按钮</g-button>
          <g-button disabled>加载按钮</g-button>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>