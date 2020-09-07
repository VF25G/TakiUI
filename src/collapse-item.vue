<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <transition name="collapseSlide">
      <div class="item-content" ref="content" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'webUICollapseItem',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        this.open = names.indexOf(this.name) >= 0;
      })
    },
    methods: {
      toggle() {
        if (this.open) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $grey: #d8d3cd;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      border: 1px solid $grey;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      background: lighten($grey, 8%);
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .item-content {
      padding: 8px;
    }
  }
  .collapseSlide-enter-active, .collapseSlide-leave-active{
    transition: all .4s ease-in;
  }

  .collapseSlide-enter, .collapseSlide-leave-to{
    opacity: 0;
  }
</style>