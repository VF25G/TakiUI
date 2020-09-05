<template>
  <div style="padding-top: 8px">
    <h2>单个按钮</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-button>默认按钮</t-button>
    <t-button icon="settings">设置按钮</t-button>
    <t-button :loading="true">加载按钮</t-button>
    <t-button disabled>禁用按钮</t-button>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(buttonCode)}}</code></pre>
    </div>

    <h2>组合按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <t-button-group>
      <t-button icon="left" icon-position="left">上一页</t-button>
      <t-button>更多</t-button>
      <t-button icon="right" icon-position="right">下一页</t-button>
    </t-button-group>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(buttonGroupCode)}}</code></pre>
    </div>

    <section>
      <h2>Attributes - 属性</h2>
      <p class="des">
        组件将被渲染为
        <span class="code">button</span>标签，因此你可以使用所有的
        <span class="code">button</span>原生属性。
      </p>
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
            <td>icon</td>
            <td class="des">icon 图标名称</td>
            <td class="type">String</td>
            <td>settings | download | left | right</td>
            <td>——</td>
          </tr>
          <tr>
            <td>position</td>
            <td class="des">icon 位置</td>
            <td class="type">String</td>
            <td>left , right</td>
            <td>left</td>
          </tr>
          <tr>
            <td>loading</td>
            <td class="des">loading 动画效果</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td class="des">是否禁用</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
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
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      't-button': Button,
      't-button-group': ButtonGroup
    },
    mixins: [mixin],
    data () {
      return {
        buttonCode: `
          <t-button>默认按钮</t-button>
          <t-button icon="settings">设置按钮</t-button>
          <t-button :loading="true">加载按钮</t-button>
          <t-button disabled>禁用按钮</t-button>
        `,

        buttonGroupCode: `
          <t-button-group>
            <t-button icon="left" icon-position="left">上一页</t-button>
            <t-button>更多</t-button>
            <t-button icon="right" icon-position="right">下一页</t-button>
          </t-button-group>
        `
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
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