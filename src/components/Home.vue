<template>
  <div id="home">
    <img alt="Flamm Bros" src="../assets/flamms.png">
    <Countdown date="May 23, 2020 12:00:00"/>
  </div>
</template>

<script>
import Countdown from './Countdown.vue'

export default {
  name: 'home',
  components: {
    Countdown
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
