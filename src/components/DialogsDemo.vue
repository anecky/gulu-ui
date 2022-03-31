<template>
  <Demo :component="DialogDemo1"/>
  <Demo :component="DialogDemo2"/>
</template>

<script lang="ts">
  import DialogDemo1 from './dialogDemo/DialogDemo1.vue';
  import DialogDemo2 from './dialogDemo/DialogDemo2.vue';
  import Demo from './Demo.vue';

  export default {
    name: 'DialogsDemo',
    components: {Demo},
    setup() {
      return {
        DialogDemo1,
        DialogDemo2
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
