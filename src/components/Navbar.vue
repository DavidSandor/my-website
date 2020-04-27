<template>
  <nav>
    <a class="navbar-brand" href="#">davidsandor</a>
    <div id="page-links" v-if="isPageLinksVisible" @click="routerLinkClickHandler">
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/references">References</router-link>
      <router-link class="router-link" to="/about">About me</router-link>
      <router-link class="router-link" to="/contact">Contact</router-link>
    </div>
    <fa-icon id="links-menu" name="bars" @click="linksMenuClickHandler"></fa-icon>
  </nav>
</template>

<script>

import variables from '@/style/_variables.scss'

export default {
  data () {
    return {
      isPageLinksVisible: true,
      screenWidth: window.innerWidth,
    }
  },
  created () {
    window.addEventListener('resize', this.windowResizeHandler)

    if(this.screenWidth <= variables.screen_sm_width) {
      this.isPageLinksVisible = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.windowResizeHandler)
  },
  methods: {
    windowResizeHandler (event) {
      this.screenWidth = event.target.innerWidth

      if(this.screenWidth > variables.screen_sm_width) {
        this.isPageLinksVisible = true
      } else {
        this.isPageLinksVisible = false
      }     
    },
    linksMenuClickHandler () {
      this.isPageLinksVisible = !this.isPageLinksVisible
    },
    routerLinkClickHandler () {
      if(this.screenWidth <= variables.screen_sm_width) {
        this.isPageLinksVisible = false
      }
    }
  }
}
</script>

<style lang="scss">

nav {
  z-index: 10;
  height: $navbar-height;
  line-height: $navbar-height;
  margin-bottom: $general-space;
  text-align: right;
  background-color: $primary-bg-color;
  opacity: 0.97;
  padding: 0 $general-space;
  box-shadow: $container-shadow;

  & .navbar-brand {
    font-size: 16px;
    float: left;
    padding: 0;
    margin: 0;
  }
}

#page-links {
  @media all and (max-width: $screen-sm-width) {
    position: fixed;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    left: 0;
    right: 0;
    bottom: 0;
    top: $navbar-height;
    background-color: white;
    padding: $general-space;
    font-weight: 500;
    box-shadow: inset 1px 4px 20px -5px rgba(49, 49, 49, 0.2);

    & .router-link {
      display: inline-block;
      padding: 0;
      line-height: 35px;
      margin: $general-space auto;
      text-align: center;
      color: inherit;
    }

    .router-link-exact-active {
      color: inherit;
      background-color: inherit;
      font-weight: inherit;
    }
  }
}

#links-menu {
  display: none;
  height: $navbar-height;
  width: 24px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: -5px;
  @media all and (max-width: $screen-sm-width) {
    display: inline-block;
  }
}

.router-link {
  text-decoration: none;
  color: black;
  margin: 6px 12px;
  font-size: 16px;
  padding: 4px 0;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: $primary-theme-color;
  }
}

.router-link-exact-active {
  border-bottom: 3px solid $primary-theme-color;

  &:hover {
    text-decoration: none;
    color: $primary-theme-color;
  }
}

</style>