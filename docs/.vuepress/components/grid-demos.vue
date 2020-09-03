<template>
  <div style="padding-top: 8px">
    <h2>24网格</h2>

    <p>
      <strong>预览</strong>
    </p>

    <div class="normalDemo">
      <TRow class="tRow">
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
      </TRow>
      <TRow class="tRow">
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
      </TRow>
      <TRow class="tRow">
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
      </TRow>
      <TRow class="tRow">
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
        <TCol span="2">
          <div class="tCol">2</div>
        </TCol>
      </TRow>
    </div>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(normalCode)}}</code></pre>
    </div>

    <h2>区块间隔 - gutter</h2>

    <p>
      <strong>预览</strong>
    </p>

    <div class="gutterDemo">
      <TRow class="tRow" gutter="10">
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
      </TRow>
      <TRow class="tRow" gutter="10">
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6">
          <div class="tCol">6</div>
        </TCol>
      </TRow>
    </div>

    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(gutterCode)}}</code></pre>
    </div>

    <h2>偏移-offset</h2>

    <p>
      <strong>预览</strong>
    </p>

    <div class="offsetDemo">
      <TRow class="tRow">
        <TCol span="8">
          <div class="tCol">8</div>
        </TCol>
        <TCol span="8" offset="8">
          <div class="tCol">8</div>
        </TCol>
      </TRow>
      <TRow class="tRow">
        <TCol span="6" offset="6">
          <div class="tCol">6</div>
        </TCol>
        <TCol span="6" offset="6">
          <div class="tCol">6</div>
        </TCol>
      </TRow>
      <TRow class="tRow">
        <TCol span="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4" offset="2">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4" offset="4">
          <div class="tCol">4</div>
        </TCol>
        <TCol span="4" offset="2">
          <div class="tCol">4</div>
        </TCol>
      </TRow>
    </div>

    <p>
      <strong>HTML代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{formatCode(offsetCode)}}</code></pre>
    </div>

  </div>
</template>

<script>
  import mixin from '../mixin'
  import TRow from '../../../src/row'
  import TCol from '../../../src/col'

  export default {
    components: {TRow, TCol},
    mixins: [mixin],
    data() {
      return {
        value: 'Hello webUI',
        normalCode: `
          <TRow class="tRow">
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
          </TRow>
          <TRow class="tRow">
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
      </TRow>
          <TRow class="tRow">
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
          </TRow>
          <TRow class="tRow">
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
            <TCol span="2">
              <div class="tCol">2</div>
            </TCol>
          </TRow>
        `,

        gutterCode: `
          <TRow class="tRow" gutter="10">
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
          </TRow>
          <TRow class="tRow" gutter="10">
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6">
              <div class="tCol">6</div>
            </TCol>
          </TRow>
        `,

        offsetCode: `
          <TRow class="tRow">
            <TCol span="8">
              <div class="tCol">8</div>
            </TCol>
            <TCol span="8" offset="8">
              <div class="tCol">8</div>
            </TCol>
          </TRow>
          <TRow class="tRow">
            <TCol span="6" offset="6">
              <div class="tCol">6</div>
            </TCol>
            <TCol span="6" offset="6">
              <div class="tCol">6</div>
            </TCol>
          </TRow>
          <TRow class="tRow">
            <TCol span="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4" offset="2">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4" offset="4">
              <div class="tCol">4</div>
            </TCol>
            <TCol span="4" offset="2">
              <div class="tCol">4</div>
            </TCol>
          </TRow>
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