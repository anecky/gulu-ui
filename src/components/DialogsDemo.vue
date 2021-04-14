<template>
  <div>dialog示例</div>
  <h2>示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible"></Dialog>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    name: 'DialogsDemo',
    components: {Button, Dialog},
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = !visible.value;
      };
      return {visible, toggle};
    }
  };
</script>

<style lang="scss" scoped>

</style>
