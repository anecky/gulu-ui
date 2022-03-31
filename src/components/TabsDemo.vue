<template>
  <Demo :component="TabsDemo1"></Demo>
</template>
<script>
  import Demo from './Demo.vue'
  import TabsDemo1 from './tabsDemo/TabsDemo1.vue'

  export default {
    components: {Demo},
    setup() {
      return {TabsDemo1}
    }
  }
</script>
