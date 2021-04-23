<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Markdown',
    props: {
      path: {
        type: String
      }
    },
    setup(props) {
      const content = ref<String>(null);
      console.log(props.path);
      import(props.path).then((result) => {
        content.value = result.default;
      });
      return {content};
    }
  };
</script>

<style lang="scss" scoped>

</style>
