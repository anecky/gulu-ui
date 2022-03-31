<demo>
  常规使用
</demo>
<template>
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
</template>

<script lang="ts">
  import {ref} from 'vue';
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';

  export default {
    name: 'dialogDemo1',
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
      return {toggle, visible, f1, f2};
    }
  };
</script>

<style lang="scss" scoped>

</style>
