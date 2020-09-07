<template>
  <div class="taki-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'webUIContent'
  }
</script>

<style lang="scss" scoped>
  .taki-content {
    flex-grow: 1;
  }
</style>