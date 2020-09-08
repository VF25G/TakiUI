<template>
  <transition name="slide">
    <div class="taki-sider" v-if="visible">
      <slot></slot>
      <t-button @click="visible=false">close</t-button>
    </div>
  </transition>
</template>

<script>
  import Button from '../src/button'
  export default {
    name: 'takiUISider',
    components: { 't-button': Button },
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style lang="scss">
  .taki-sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }

  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>