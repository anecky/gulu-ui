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
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #ffffff;
        display: inline-block;
        $h: 28px;
        height: $h;
        -webkit-border-radius: $h/2;
        -moz-border-radius: $h/2;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>
