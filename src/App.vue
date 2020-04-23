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

<style lang="scss">

#app {
  font-family: $primary-font-family;
  background-color: $body-bg-color;
}

body {
  margin: 0;
}

hr {
  margin: 10px 0;
}

#main-content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

#navbar {
  position: sticky;
  top: 0;
}

.btn-primary {
  background: linear-gradient(45deg, rgba(2,0,54,1) 0%, rgba(26,2,255,1) 100%);
  border: none!important;
}

.btn-outline-primary {
  &:hover {
    background-color: transparent!important;
    color: $primary-theme-color!important;
  }
}

</style>
