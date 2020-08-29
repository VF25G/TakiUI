<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'webUITabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs must be have tabs-head & tabs-body')
      }
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'webUITabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'webUITabsItem'
              && childVm.$props.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style>
  .tabs {

  }
</style>