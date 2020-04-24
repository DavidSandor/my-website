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

html {
  background-color: $body-bg-color;
}

hr {
  margin: 12px 0!important;
}

#main-content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

#navbar {
  position: sticky;
  top: 0;
}

// Bootstrap button modifications

.btn {
  &:focus, &:active, &.focus, &.active {
    outline: 0!important;
    border: 0!important;
    box-shadow: none!important;
  }
}

.btn-primary {
  border: none!important;
}

.btn-outline-primary {
  border: none!important;
  background-color: $primary-theme-color-light!important;

  &:hover {
    color: $primary-theme-color!important;
    background-color: darken($primary-theme-color-light, 5%)!important;
  }
}

</style>
