<template>
  <div style="padding-top: 8px">
    <h2>简单用法</h2>

    <p>
      <strong>预览</strong>
    </p>

    <Tabs :selected="selected">
      <TabsHead>
        <TabsItem name="1">1</TabsItem>
        <TabsItem name="2">2</TabsItem>
        <TabsItem name="3">3</TabsItem>
      </TabsHead>
      <TabsBody>
        <TabsPane name="1">content 1</TabsPane>
        <TabsPane name="2">content 2</TabsPane>
        <TabsPane name="3">content 3</TabsPane>
      </TabsBody>
    </Tabs>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{tabsCode}}</code></pre>
    </div>

    <h2>禁止选项卡</h2>

    <p>
      <strong>预览</strong>
    </p>

    <Tabs :selected="selected">
      <TabsHead>
        <TabsItem name="1">1</TabsItem>
        <TabsItem name="2">2</TabsItem>
        <TabsItem name="3" disabled>3</TabsItem>
      </TabsHead>
      <TabsBody>
        <TabsPane name="1">content 1</TabsPane>
        <TabsPane name="2">content 2</TabsPane>
        <TabsPane name="3">content 3</TabsPane>
      </TabsBody>
    </Tabs>

    <p>
      <strong>代码</strong>
    </p>

    <div v-highlight>
      <pre><code class="html">{{disabledTabsCode}}</code></pre>
    </div>

  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'

  export default {
    components: {Tabs, TabsBody, TabsHead, TabsItem, TabsPane},
    data() {
      return {
        selected: '1',
        tabsCode: `
          <Tabs :selected="selected">
            <TabsHead>
              <TabsItem name="1">1</TabsItem>
              <TabsItem name="2">2</TabsItem>
              <TabsItem name="3">3</TabsItem>
            </TabsHead>
            <TabsBody>
              <TabsPane name="1">content 1</TabsPane>
              <TabsPane name="2">content 2</TabsPane>
              <TabsPane name="3">content 3</TabsPane>
            </TabsBody>
          </Tabs>
      `.replace(/^ {8}/gm, '').trim(),

        disabledTabsCode: `
          <Tabs :selected="selected">
            <TabsHead>
              <TabsItem name="1">1</TabsItem>
              <TabsItem name="2">2</TabsItem>
              <TabsItem name="3" disabled>3</TabsItem>
            </TabsHead>
            <TabsBody>
              <TabsPane name="1">content 1</TabsPane>
              <TabsPane name="2">content 2</TabsPane>
              <TabsPane name="3">content 3</TabsPane>
            </TabsBody>
          </Tabs>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>