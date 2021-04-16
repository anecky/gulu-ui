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
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref, h} from 'vue';
  import {openDialog} from '../lib/openDialog';

  export default {
    name: 'DialogsDemo',
    components: {Button, Dialog},
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = !visible.value;
      };
      const f1 = () => {
        console.log('ok');
        return false;
      };
      const f2 = () => {
        console.log('cancel');
      };
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          ok() {
            console.log('ok');
          },
          cancel() {
            console.log('cancel');
          }
        });
      };
      return {visible, toggle, f1, f2, showDialog};
    }
  };
</script>

<style lang="scss" scoped>

</style>
