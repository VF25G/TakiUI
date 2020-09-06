<template>
  <div style="padding-top: 8px">
    <h2>24网格</h2>

    <p>
      <strong>预览</strong>
    </p>

    <section class="normalDemo">
      <t-row class="tRow">
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
      <t-row class="tRow">
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
      <t-row class="tRow">
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
        <t-col span="4">
          <div class="tCol">4</div>
        </t-col>
      </t-row>
      <t-row class="tRow">
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
        <t-col span="2">
          <div class="tCol">2</div>
        </t-col>
      </t-row>
    </section>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(normalCode)}}</code></pre>
    </div>

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
        normalCode: `
          <t-row class="tRow">
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
          <t-row class="tRow">
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
          <t-row class="tRow">
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="tCol">4</div>
            </t-col>
          </t-row>
          <t-row class="tRow">
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="tCol">2</div>
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
  }

  .tCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .normalDemo {
    .col:not(:first-child){
      .tCol {
        border-left: none;
      }
    }
  }
</style>