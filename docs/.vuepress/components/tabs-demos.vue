<template>
  <div style="padding-top: 8px">
    <h2>简单用法</h2>
    <section>
      <p>
        <strong>预览</strong>
      </p>

      <t-tabs :selected="selected">
        <t-tabs-head>
          <t-tabs-item name="1">Tab 1</t-tabs-item>
          <t-tabs-item name="2">Tab 2</t-tabs-item>
          <t-tabs-item name="3">Tab 3</t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
          <t-tabs-pane name="1">
            <p>天街小雨润如酥，</p>
            <p>草色遥看近却无。</p>
          </t-tabs-pane>
          <t-tabs-pane name="2">
            <p>最是一年春好处，</p>
            <p>绝胜烟柳满皇都。</p>
          </t-tabs-pane>
          <t-tabs-pane name="3">
            <p>韩愈</p>
            <p>《初春小雨》</p>
          </t-tabs-pane>
        </t-tabs-body>
      </t-tabs>

      <p>
        <strong>HTML代码</strong>
      </p>

      <div v-highlight>
        <pre><code class="html">{{formatCode(tabsCode)}}</code></pre>
      </div>

      <p>
        <strong>JS代码</strong>
      </p>

      <div v-highlight>
        <pre><code class="js">{{formatCode(jsCode)}}</code></pre>
      </div>
    </section>

    <section>
      <h2>禁止选项卡</h2>

      <p>
        <strong>预览</strong>
      </p>

      <t-tabs :selected="selected">
        <t-tabs-head>
          <t-tabs-item name="1">Tab 1</t-tabs-item>
          <t-tabs-item name="2">Tab 2</t-tabs-item>
          <t-tabs-item name="3" disabled>Tab 3</t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
          <t-tabs-pane name="1">
            <p>绿树浓阴夏日长，</p>
            <p>楼台倒影入池塘。</p>
          </t-tabs-pane>
          <t-tabs-pane name="2">
            <p>水晶帘动微风起，</p>
            <p>满架蔷薇一院香。</p>
          </t-tabs-pane>
          <t-tabs-pane name="3">
            <p>唐·高骈</p>
            <p>《山亭夏日》</p>
          </t-tabs-pane>
        </t-tabs-body>
      </t-tabs>

      <p>
        <strong>HTML代码</strong>
      </p>

      <div v-highlight>
        <pre><code class="html">{{formatCode(disabledTabsCode)}}</code></pre>
      </div>

      <p>
        <strong>JS代码</strong>
      </p>

      <div v-highlight>
        <pre><code class="js">{{formatCode(jsCode)}}</code></pre>
      </div>
    </section>

    <section>
      <h2>Attributes - 属性</h2>
      <p class="des">
        <span class="code">Tabs</span>
        组件依赖于子组件
        <span class="code">TabsHead</span>
        <span class="code">TabsItem</span>
        <span class="code">TabsBody</span>
        <span class="code">TabsPane</span>
      </p>
      <h3>Tabs</h3>
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
            <td class="des">必要属性：当前选中标签</td>
            <td class="type">String | Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h3>TabsItem</h3>
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
            <td>name</td>
            <td class="des">必要属性：唯一标识符。</td>
            <td class="type">String | Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td class="des">禁用当前Tab</td>
            <td class="type">Boolean</td>
            <td>——</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h3>TabsPane</h3>
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
            <td>name</td>
            <td class="des">必要属性：唯一标识符；需与 TabsItem 一一对应</td>
            <td class="type">String | Number</td>
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
  import Button from '../../../src/button'
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'

  export default {
    components: {
      't-button': Button,
      't-tabs': Tabs,
      't-tabs-body': TabsBody,
      't-tabs-head': TabsHead,
      't-tabs-item': TabsItem,
      't-tabs-pane': TabsPane},
    mixins: [mixin],
    data() {
      return {
        selected: '1',
        tabsCode: `
          <t-tabs :selected="selected">
            <t-tabs-head>
              <t-tabs-item name="1">Tab 1</t-tabs-item>
              <t-tabs-item name="2">Tab 2</t-tabs-item>
              <t-tabs-item name="3">Tab 3</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
              <t-tabs-pane name="1">
                <p>天街小雨润如酥，</p>
                <p>草色遥看近却无。</p>
              </t-tabs-pane>
              <t-tabs-pane name="2">
                <p>最是一年春好处，</p>
                <p>绝胜烟柳满皇都。</p>
              </t-tabs-pane>
                    <p>韩愈</p>
                <p>《初春小雨》</p>
              </t-tabs-pane>
            </t-tabs-body>
          </t-tabs>
        `,

        disabledTabsCode: `
          <t-tabs :selected="selected">
            <t-tabs-head>
              <t-tabs-item name="1">Tab 1</t-tabs-item>
              <t-tabs-item name="2">Tab 2</t-tabs-item>
              <t-tabs-item name="3" disabled>Tab 3</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
              <t-tabs-pane name="1">
                <p>绿树浓阴夏日长，</p>
                <p>楼台倒影入池塘。</p>
              </t-tabs-pane>
              <t-tabs-pane name="2">
                <p>水晶帘动微风起，</p>
                <p>满架蔷薇一院香。</p>
              </t-tabs-pane>
              <t-tabs-pane name="3">
                <p>唐·高骈</p>
                <p>《山亭夏日》</p>
              </t-tabs-pane>
            </t-tabs-body>
          </t-tabs>
        `,

        jsCode: `
          data() {
            return {
              selected: '1',
              // ...
            }
          }
        `,
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

  .g-button {
    color: #43658b;
    font-weight: bold;
    border: 2px solid #43658b;
  }
</style>