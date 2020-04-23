<template>
  <div id="app">
    <div id="main-content-wrapper">
      <navbar class="navbar"></navbar>
      <router-view/>
    </div>
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

#main-content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  background-color: yellow;
}

</style>
