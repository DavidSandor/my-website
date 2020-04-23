<template>
  <div id="app">
    <div id="main-content-wrapper">
      <navbar id="navbar"></navbar>
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
    padding-top: 50px;
}

h1, h2 {
  padding: 5px 10px;
}

#main-content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  background-color: yellow;
}

#navbar {
  position: sticky;
  top: 50px;
}

</style>
