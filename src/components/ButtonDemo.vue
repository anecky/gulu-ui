<template>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>

</template>

<script lang="ts">
  import Button from '../lib/Button.vue';
  import Demo from './Demo.vue';
  import ButtonDemo1 from './buttonDemo/ButtonDemo1.vue';
  import ButtonDemo2 from './buttonDemo/ButtonDemo2.vue';
  import ButtonDemo3 from './buttonDemo/ButtonDemo3.vue';
  import ButtonDemo4 from './buttonDemo/ButtonDemo4.vue';

  export default {
    name: 'ButtonDemo',
    components: {ButtonDemo4, ButtonDemo3, ButtonDemo2, ButtonDemo1, Demo, Button},
    setup() {
      const onClick = () => {
        console.log('hi');
      };
      return {onClick, ButtonDemo1, ButtonDemo2, ButtonDemo3,ButtonDemo4};
    }
  };
</script>

<style lang="scss" scoped>

</style>
