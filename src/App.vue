<template>
 <div id="app">
   <router-view></router-view>
 </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import '~@/assets/css/iconfont.css';
  * {
    margin: 0;
    padding: 0;
  }
  a {text-decoration: none;color: #333}
  li {
      list-style: none;
  }
  button, input {
      border: none;
  }
  html, body {
    height: 100%;
  }
  #app {
    position: relative;
    height: 100%;
  }
  body {
      font-size: 16px;
      color: #333;
  }
.clearfloat:after {
    display: block;
    content: '';
    clear: both;
}
</style>
