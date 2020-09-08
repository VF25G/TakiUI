<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'takiUITabs',
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
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs must be have tabs-head & tabs-body')
        }
      },
      selectTab() {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'takiUITabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'takiUITabsItem'
                && childVm.$props.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren();
      this.selectTab()
    }
  }
</script>

<style>
  .tabs {

  }
</style>