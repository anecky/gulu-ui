<template>
  <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}"><span></span></button>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Switch',
    props: {
      value: {type: Boolean, default: false}
    },
    setup(props, context) {
      const checked = ref(false);
      const toggle = () => {
        context.emit('update:value', !props.value);
      };
      return {checked, toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  .gulu-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    &:focus {
      outline: none;
    }

    &.gulu-checked {
      background: #1890ff;

      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &:active {
      > span {
        width: $h2+4px;
      }
    }

    &.checked:active {
      > span {
        width: $h2+4px;
        margin-left: -4px;
      }

    }
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    -webkit-transition: all 250ms;
    -moz-transition: all 250ms;
    -o-transition: all 250ms;
    transition: all 250ms;
  }
</style>
