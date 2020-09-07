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

    <section>
      <h2>Attributes - 属性</h2>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th class="des">说明</th>
            <th class="type">类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>position</td>
            <td class="des">气泡卡片位置</td>
            <td class="type">String</td>
            <td>top | right | left | bottom</td>
            <td>top</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td class="des">气泡卡片触发方式</td>
            <td class="type">String</td>
            <td>click | hover</td>
            <td>click</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

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
  .attr {
    td {
      text-align:center;
    }
    .des {
      text-align: left;
    }
  }
</style>