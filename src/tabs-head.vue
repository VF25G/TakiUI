<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: 'webUITabsHead',
    inject: ['eventBus'],
    created() {
      this.$emit('update:selected', 'tabs-head data')
    }
  }
</script>

<style>
  .tabs-head {
    
  }
</style>