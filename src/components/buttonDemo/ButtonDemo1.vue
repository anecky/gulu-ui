<demo>
  按钮类型 theme
</demo>
<template>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
  export default {
    name: 'buttonDemo1',
    components: {Button},
    setup() {
      const onClick = () => {
        console.log('hi');
      };
      return {onClick};
    }
  };
</script>

<style lang="scss" scoped>

</style>
