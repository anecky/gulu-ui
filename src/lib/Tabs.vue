<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles"
           @click="select(t)"
           :class="{selected:t===selected}"
           :key="index">{{t}}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"
                 v-for="c in defaults"
                 :class="{selected: c.props.title === selected}"
                 :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {computed} from 'vue';

  export default {
    name: 'Tabs',
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是Tab');
        }
      });
      const current = computed(() => {
        console.log('重新 return');
        return defaults.filter((tag) => {
          return tag.props.title === props.selected;
        })[0];
      });
      const select = (title: string) => {
        context.emit('update:selected', title);
      };
      const titles = defaults.map(tag => {
        return tag.props.title;
      });
      return {defaults, titles, select, current};
    }
  };
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;

  .gulu-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-content {
      padding: 8px 0;
      &-item {
        border: 1px solid red;
        display: none;

        &.selected {
          border: 1px solid green;
          display: block;
        }
      }
    }
  }


</style>
