<template>
  <div class="tabs-item" @click="logName">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'webUITabsItem',
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    methods: {
      logName() {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>

<style>
  .tabs-item {

  }
</style>