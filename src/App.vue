<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <router-view/>
  </div>
</template>

<script>

import navbar from '@/components/Navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style>

body {
    margin: 0;
}

</style>
