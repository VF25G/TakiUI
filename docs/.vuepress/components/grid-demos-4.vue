<template>
  <div style="padding-top: 8px">
    <h2>响应式</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section>
      当页面宽度小于577px：两行两列<br>
      当页面宽度大于577px：一行四列
    </section>
    <section class="responsiveDemo">
      <t-row class="tRow">
        <t-col span="24"
               :ipad="{span: 11}" >
          <div class="tCol">Responsive</div>
        </t-col>
        <t-col span="24"
               :ipad="{span: 12, offset: 1}" >
          <div class="tCol">Responsive</div>
        </t-col>
      </t-row>
      <t-row class="tRow">
        <t-col span="24"
               :ipad="{span: 11}" >
          <div class="tCol">Responsive</div>
        </t-col>
        <t-col span="24"
               :ipad="{span: 12, offset: 1}" >
          <div class="tCol">Responsive</div>
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
      <h3>Col RWD Attributes</h3>
      Col支持响应式设计，接受ipad、narrowPC、pc、widePc对象属性。<br>
      上述对象其key必须为span或者offset<br>
      span指定宽度，offset指定间隙。
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
            <td>ipad</td>
            <td class="des">
              min-width: 577px
            </td>
            <td class="type">{span: Number, offset: Number}</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>narrowPC</td>
            <td class="des">
              min-width: 769px
            </td>
            <td class="type">{span: Number, offset: Number}</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>pc</td>
            <td class="des">
              min-width: 933px
            </td>
            <td class="type">{span: Number, offset: Number}</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>widePc</td>
            <td class="des">
              min-width: 1201px
            </td>
            <td class="type">{span: Number, offset: Number}</td>
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
            <t-col span="24"
                   :ipad="{span: 12}" >
              <div class="tCol">Responsive</div>
            </t-col>
            <t-col span="24"
                   :ipad="{span: 12}" >
              <div class="tCol">Responsive</div>
            </t-col>
          </t-row>
          <t-row class="tRow">
            <t-col span="24"
                   :ipad="{span: 12}" >
              <div class="tCol">Responsive</div>
            </t-col>
            <t-col span="24"
                   :ipad="{span: 12}" >
              <div class="tCol">Responsive</div>
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
    color: #184d47;
    &:first-child {
      > .col > .tCol {
        background: #96bb7c;
      }
    }
    &:last-child {
      > .col > .tCol {
        background: #d6efc7;
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