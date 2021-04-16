<template>
  <div>dialog示例</div>
  <h2>示例1</h2>
  <div style="position: relative;z-index: 1;">
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible"
            :closeOnclickOverlay="true"
            :ok="f1"
            :cancel="f2"
    >
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
  <div style="position: relative;z-index: 2;width:300px;height: 300px;background:red;"></div>
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
      const f1 = () => {
        return false;
      };
      const f2 = () => {

      };
      return {visible, toggle, f1, f2};
    }
  };
</script>

<style lang="scss" scoped>

</style>
