<template>
  <Demo :component="SwitchDemo1"/>
  <Demo :component="SwitchDemo2"/>
</template>

<script lang="ts">
  import SwitchDemo1 from './switchDemo/SwitchDemo1.vue';
  import SwitchDemo2 from './switchDemo/SwitchDemo2.vue';
  import Demo from './Demo.vue';
  export default {
    name: 'SwitchDemo',
    components: {Demo},
    setup() {
      return {SwitchDemo1, SwitchDemo2};
    }
  };
</script>
