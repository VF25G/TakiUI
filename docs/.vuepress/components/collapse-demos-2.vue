<template>
  <div style="padding-top: 8px">
    <h2>默认开启</h2>

    <p>
      <strong>预览</strong>
    </p>

    <t-collapse :selected.sync="selectedItem">
      <t-collapse-item title="This is panel header 1" name="1">
        <div>不为外撼</div>
      </t-collapse-item>
      <t-collapse-item title="This is panel header 2" name="2">
        <div>不以物移</div>
      </t-collapse-item>
      <t-collapse-item title="This is panel header 3" name="3">
        <div>而后可以任天下之大事</div>
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
          <t-collapse :selected.sync="selectedItem">
            <t-collapse-item title="This is panel header 1" name="1">
              <div>不为外撼</div>
            </t-collapse-item>
            <t-collapse-item title="This is panel header 2" name="2">
              <div>不以物移</div>
            </t-collapse-item>
            <t-collapse-item title="This is panel header 3" name="3">
              <div>而后可以任天下之大事</div>
            </t-collapse-item>
          </t-collapse>
        `,
      }
    }
  }
</script>