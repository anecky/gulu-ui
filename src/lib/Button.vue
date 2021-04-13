<template>
  <button class="gulu-button" :class="classes" v-bind="rest">
    <slot/>
    {{theme}}
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    name: 'Button',
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    setup(props) {
      const {theme, size} = props;
      const classes = computed(() => {
        return {
          [`gulu-theme-${theme}`]: theme,
          [`gulu-size-${size}`]: size
        };
      });
      return {classes, size};
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .gulu-button {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: normal;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    -webkit-box-shadow: 0 1px 0 fade-out(black, 0.95);
    -moz-box-shadow: 0 1px 0 fade-out(black, 0.95);
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }
  }


  .gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%)
    }
  }

  .gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 1%);
    }
  }
</style>
