<template>
  <div style="padding-top: 8px">
    <h2>hover触发</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-popover trigger="hover">
      <t-button>上方弹出</t-button>
      <template slot="content">九层之台</template>
    </t-popover>
    <t-popover position="bottom" trigger="hover">
      <t-button>下方弹出</t-button>
      <template slot="content">起于累土</template>
    </t-popover>
    <t-popover position="left" trigger="hover">
      <t-button>左边弹出</t-button>
      <template slot="content">千里之行</template>
    </t-popover>
    <t-popover position="right" trigger="hover">
      <t-button>右边弹出</t-button>
      <template slot="content">始于足下</template>
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
          <t-popover trigger="hover">
            <t-button>上方弹出</t-button>
            <template slot="content">九层之台</template>
          </t-popover>
          <t-popover position="bottom" trigger="hover">
            <t-button>下方弹出</t-button>
            <template slot="content">起于累土</template>
          </t-popover>
          <t-popover position="left" trigger="hover">
            <t-button>左边弹出</t-button>
            <template slot="content">千里之行</template>
          </t-popover>
          <t-popover position="right" trigger="hover">
            <t-button>右边弹出</t-button>
            <template slot="content">始于足下</template>
          </t-popover>
        `,
      }
    }
  }
</script>