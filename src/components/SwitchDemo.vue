<template>
  <Demo :component="SwitchDemo1"/>
  <Demo :component="SwitchDemo2"/>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import {ref} from 'vue';
  import SwitchDemo1 from './switchDemo/SwitchDemo1.vue';
  import SwitchDemo2 from './switchDemo/SwitchDemo2.vue';
  import Demo from './Demo.vue';

  const Prism = (window as any).Prism;
  export default {
    name: 'SwitchDemo',
    components: {Demo},
    setup() {
      return {SwitchDemo1, SwitchDemo2, Prism};
    }
  };
</script>
