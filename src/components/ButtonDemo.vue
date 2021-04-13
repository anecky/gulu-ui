<template>
  <div>Button示例</div>
  <h2>示例1</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <Button size="big">大按钮</Button>
    <Button>普通按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="text" size="big">大按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>

  <h2>示例3</h2>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <h2>示例4</h2>
  <div>
    <Button disabled>主要按钮</Button>
    <Button theme="link" disabled>普通按钮</Button>
    <Button theme="text" disabled>危险按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
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
