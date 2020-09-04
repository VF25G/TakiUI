<template>
  <div style="padding-top: 8px">
    <h2>点击触发</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-popover>
      <t-button>上方弹出</t-button>
      <template slot="content">锲而舍之</template>
    </t-popover>
    <t-popover position="bottom">
      <t-button>下方弹出</t-button>
      <template slot="content">朽木不折</template>
    </t-popover>
    <t-popover position="left">
      <t-button>左边弹出</t-button>
      <template slot="content">锲而不舍</template>
    </t-popover>
    <t-popover position="right">
      <t-button>右边弹出</t-button>
      <template slot="content">金石可镂</template>
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
    data () {
      return {
        popoverCode: `
          <t-popover>
            <t-button>上方弹出</t-button>
            <template slot="content">锲而舍之</template>
          </t-popover>
          <t-popover position="bottom">
            <t-button>下方弹出</t-button>
            <template slot="content">朽木不折</template>
          </t-popover>
          <t-popover position="left">
            <t-button>左边弹出</t-button>
            <template slot="content">锲而不舍</template>
          </t-popover>
          <t-popover position="right">
            <t-button>右边弹出</t-button>
            <template slot="content">金石可镂</template>
          </t-popover>
        `,
      }
    }
  }
</script>