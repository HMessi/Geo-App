<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/NAvbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    background: #ddd;
  }
</style>
