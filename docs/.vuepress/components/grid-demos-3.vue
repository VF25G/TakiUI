<template>
  <div style="padding-top: 8px">
    <h2>偏移-offset</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section class="offsetDemo">
      <t-row class="tRow">
        <t-col span="8">
          <div class="tCol">8</div>
        </t-col>
        <t-col span="8" offset="8">
          <div class="tCol">8</div>
        </t-col>
      </t-row>
      <t-row class="tRow">
        <t-col span="6" offset="6">
          <div class="tCol">6</div>
        </t-col>
        <t-col span="6" offset="6">
          <div class="tCol">6</div>
        </t-col>
      </t-row>
      <t-row class="tRow">
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4" offset="2">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4" offset="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4" offset="2">
          <div class="tCol">4</div>
        </t-col>
      </t-row>
    </section>

    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(offsetCode)}}</code></pre>
    </div>

    <section>
      <h3>Col Attributes</h3>
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
            <td>span</td>
            <td class="des">
              网格系统中
              <br>1 到 24 的值来表示其跨越的范围，例如
              <br>三个等宽的列可以使用span="8" 来创建
            </td>
            <td class="type">String | Boolean</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>offset</td>
            <td class="des">
              偏移量，单位同span
            </td>
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
        offsetCode: `
          <t-row class="tRow">
            <t-col span="8">
              <div class="tCol">8</div>
            </t-col>
            <t-col span="8" offset="8">
              <div class="tCol">8</div>
            </t-col>
          </t-row>
          <t-row class="tRow">
            <t-col span="6" offset="6">
              <div class="tCol">6</div>
            </t-col>
            <t-col span="6" offset="6">
              <div class="tCol">6</div>
            </t-col>
          </t-row>
          <t-row class="tRow">
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4" offset="2">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4" offset="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4" offset="2">
              <div class="tCol">4</div>
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
        background: #ff9a76;
      }
    }
    &:nth-child(2) {
      > .col > .tCol {
        color: #999999;
        background: #ffeadb;
      }
    }
    &:last-child {
      > .col > .tCol {
        background: #f7c5a8;
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