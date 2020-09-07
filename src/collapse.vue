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
      },
      selected: {
        type: Array
      }
    },
    data() {
      return {
        eventBus: new Vue(),
        localSelected: []
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      setSelectedArray() {
        this.$on('update:selected', (array) => {
          this.localSelected = array
        })
        if (this.selected) {
          this.localSelected = this.selected
        }
      }
    },
    mounted() {
      this.setSelectedArray();
      this.eventBus.$emit('update:selected', this.localSelected)
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.localSelected))
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.localSelected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
    }
  };
</script>

<style lang="scss" scoped>
  $lineColor: #d8d3cd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $lineColor;
    border-radius: $border-radius;
  }
</style>