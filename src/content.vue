<template>
  <div class="taki-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'takiUIContent'
  }
</script>

<style lang="scss" scoped>
  .taki-content {
    flex-grow: 1;
  }
</style>