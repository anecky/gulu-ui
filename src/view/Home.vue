<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>轱辘ui</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="action">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script>
  import Topnav from '../components/Topnav.vue'

  export default {
    name: 'Home',
    components: {Topnav}
  }
</script>

<style lang="scss" scoped>

</style>
