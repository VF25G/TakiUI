<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default {
    name: 'webUICollapse',
    props: {
      single: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      if (this.single) {
        return {
          eventBus: this.eventBus
        }
      }
    }
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