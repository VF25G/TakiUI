<template>
  <div style="padding-top: 8px">
    <h2>手风琴</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-collapse single>
      <t-collapse-item title="This is panel header 1" name="1">
        <div>明日复明日，明日何其多。</div>
      </t-collapse-item>
      <t-collapse-item title="This is panel header 2" name="2">
        <div>我生待明日，万事成蹉跎。</div>
      </t-collapse-item>
      <t-collapse-item title="This is panel header 3" name="3">
        <div>莫等闲、白了少年头，空悲切。</div>
      </t-collapse-item>
    </t-collapse>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(collapseCode)}}</code></pre>
    </div>

    <section>
      <h2>Collapse Attributes</h2>
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
            <td>selected</td>
            <td class="des">数组：为展开的collapseItem的name属性的集合。可配合.sync使用。</td>
            <td class="type">Array</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>single</td>
            <td class="des">设置是否允许展开多个collapseItem</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>CollapseItem Attributes</h2>
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
            <td>title</td>
            <td class="des">必要属性：collapse-item 的标题内容</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>name</td>
            <td class="des">必要属性，且需保证唯一性</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
  import mixin from '../mixin'
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'

  export default {
    components: {
      't-collapse': Collapse,
      't-collapse-item': CollapseItem
    },
    mixins: [mixin],
    data () {
      return {
        selectedItem: ['3'],
        collapseCode: `
          <t-collapse single>
            <t-collapse-item title="This is panel header 1" name="1">
              <div>明日复明日，明日何其多。</div>
            </t-collapse-item>
            <t-collapse-item title="This is panel header 2" name="2">
              <div>我生待明日，万事成蹉跎。</div>
            </t-collapse-item>
            <t-collapse-item title="This is panel header 3" name="3">
              <div>莫等闲、白了少年头，空悲切。</div>
            </t-collapse-item>
          </t-collapse>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .attr {
    td {
      text-align:center;
    }
    .des {
      text-align: left;
    }
  }
</style>