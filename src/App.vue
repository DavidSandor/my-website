<template>
  <div id="app">
    <navbar></navbar>
    <div id="main-content-wrapper">
      <router-view/>
    </div>
    <footer-area></footer-area>
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
}

#main-content-wrapper {
  padding-bottom: $footer-height;

  @media all and (max-width: $screen-sm-width) {
    padding-bottom: $footer-height-screen-sm + $general-space * 3;
  }
}

</style>
