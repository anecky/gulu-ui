<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <Button level="main">ok</Button>
      <Button>cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
  import Button from './Button.vue';

  export default {
    name: 'Dialog',
    components: {Button}
  };
</script>

<style lang="scss" scoped>

</style>
