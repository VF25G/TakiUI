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