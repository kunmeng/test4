<template>
  <div>
    <menu></menu>
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from './components/menu.vue'
import './css/style.css'
module.exports={
  components:{Menu}
}
</script>