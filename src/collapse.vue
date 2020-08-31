<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'webUICollapse'
  };
</script>

<style lang="scss" scoped>
  $grey: #dddddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>