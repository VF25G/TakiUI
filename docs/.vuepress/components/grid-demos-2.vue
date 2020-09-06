<template>
  <div style="padding-top: 8px">
    <h2>区块间隔 - gutter</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section class="gutterDemo">
      <t-row class="tRow" gutter="10">
        <t-col span="8">
          <div class="tCol">8</div>
        </t-col>
        <t-col span="8">
          <div class="tCol">8</div>
        </t-col>
        <t-col span="8">
          <div class="tCol">8</div>
        </t-col>
      </t-row>
      <t-row class="tRow" gutter="10">
        <t-col span="6">
          <div class="tCol">6</div>
        </t-col>
        <t-col span="6">
          <div class="tCol">6</div>
        </t-col>
        <t-col span="6">
          <div class="tCol">6</div>
        </t-col>
        <t-col span="6">
          <div class="tCol">6</div>
        </t-col>
      </t-row>
    </section>

    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(gutterCode)}}</code></pre>
    </div>

    <section>
      <h3>Row Attributes</h3>
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
            <td>gutter</td>
            <td class="des">用于设置网格间隙</td>
            <td class="type">String | Boolean</td>
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
  import Row from '../../../src/row'
  import Col from '../../../src/col'

  export default {
    components: {
      't-row': Row,
      't-col': Col
    },
    mixins: [mixin],
    data() {
      return {
        gutterCode: `
          <t-row class="tRow" gutter="10">
            <t-col span="8">
              <div class="tCol">8</div>
            </t-col>
            <t-col span="8">
              <div class="tCol">8</div>
            </t-col>
            <t-col span="8">
              <div class="tCol">8</div>
            </t-col>
          </t-row>
          <t-row class="tRow" gutter="10">
            <t-col span="6">
              <div class="tCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="tCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="tCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="tCol">6</div>
            </t-col>
          </t-row>
        `,
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .tRow {
    margin: 10px 0;
    color: white;
    &:first-child {
      > .col > .tCol {
        background: #5eaaa8;
      }
    }
    &:last-child {
      > .col > .tCol {
        background: #056676;
      }
    }
  }

  .tCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
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