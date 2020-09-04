<template>
  <div style="padding-top: 8px">
    <h2>内部关闭</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-popover>
      <t-button>上方弹出</t-button>
      <template v-slot:content="{close}">
        <div>欲穷千里目，更上一层楼。</div>
        <t-button @click="close">关闭</t-button>
      </template>
    </t-popover>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(popoverCode)}}</code></pre>
    </div>

  </div>
</template>
<script>
  import mixin from '../mixin'
  import Button from '../../../src/button'
  import Popover from '../../../src/popover'

  export default {
    components: {
      't-button': Button,
      't-popover': Popover
    },
    mixins: [mixin],
    data() {
      return {
        popoverCode: `
          <t-popover>
            <t-button>上方弹出</t-button>
            <template v-slot:content="{close}">
              <div>欲穷千里目，更上一层楼。</div>
              <t-button @click="close">关闭</t-button>
            </template>
          </t-popover>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    margin-top: 10px;
  }
</style>