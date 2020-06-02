<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
// 引入views中的Main组件，该组件作用的具体说明在Main.vue中
import Main from './views/Main.vue'

export default {
  components:{
      Main
  }
}
</script>

<style>
#app{
  height: 100%
}
</style>
