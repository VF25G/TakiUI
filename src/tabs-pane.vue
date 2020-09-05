<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'webUITabsPane',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes pane {
    0% {
      transform: translateX(100%);
    }
    60% {
      transform: translateX(-3%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .tabs-pane {
    &.active {
      color: #4e89ae;
      padding: 1.2em;
      animation: pane 600ms ;
    }
  }
</style>