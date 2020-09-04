<template>
  <div class="webUI-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'webUIContent'
  }
</script>

<style lang="scss" scoped>
  .webUI-content {
    flex-grow: 1;
  }
</style>