<template>
  <div>导航栏 |
    <router-link to="/">首页</router-link> |
    <router-link to="/Frank2">Frank2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>

  export default {
    name: 'App',
  }
</script>
