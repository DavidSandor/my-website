<template>
  <div id="app">
    <navbar id="navbar"></navbar>
    <div id="main-content-wrapper">
      <router-view/>
    </div>
    <footer-area id="footer-area"></footer-area>
  </div>
</template>

<script>

import navbar from '@/components/Navbar.vue'
import footerArea from '@/components/FooterArea.vue'

export default {
  components: {
    navbar,
    footerArea
  }
}
</script>

<style lang="scss">

#app {
  position: relative;
  min-height: 100vh;
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

h1 {
  margin: 0!important;
  @media all and (max-width: $screen-xs-width) {
    font-size: $h1-font-size-screen-xs!important;
  }
}

h2 {
  margin: 0!important;
  @media all and (max-width: $screen-xs-width) {
    font-size: $h2-font-size-screen-xs!important;
  }
}

#main-content-wrapper {
  max-width: $screen-md-width;
  margin: 0 auto;
  padding-bottom: $footer-height + $general-space * 3;

  @media all and (max-width: $screen-md-width + $general-space) {
    padding: 0 $general-space;
    padding-bottom: $footer-height-screen-md + $general-space * 3;
  }
}

#navbar {
  position: sticky;
  top: 0;
}

#footer-area {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  background: $primary-theme-gradient;

  @media all and (max-width: $screen-md-width + $general-space) {
    height: $footer-height-screen-md
  }
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
