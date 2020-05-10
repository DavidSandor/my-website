<template>
  <nav>
    <div id="page-links" v-if="isPageLinksVisible" @click="routerLinkClickHandler">
      <router-link class="router-link" to="/">HOME</router-link>
      <router-link class="router-link" to="/references">REFERENCES</router-link>
      <router-link class="router-link" to="/about">ABOUT ME</router-link>
      <router-link class="router-link" to="/contact">CONTACT</router-link>
    </div>
    <fa-icon id="links-menu" name="bars" @click="linksMenuClickHandler"></fa-icon>
  </nav>
</template>

<script>

import variables from '@/style/_theme_variables.scss'

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
  text-align: right;
  background-color: #1c1c1c;
  opacity: 0.97;
  padding: 0 $general-space;
  box-shadow: $container-shadow;
}

#page-links {
  text-align: center;
  @media all and (max-width: $screen-sm-width) {
    position: fixed;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    right: 0;
    bottom: 0;
    top: $navbar-height;
    background-color: $primary-bg-color;
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
  color: $primary-bg-color;
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
  color: $primary-bg-color;
  margin: 6px 20px;
  font-size: 14px;
  padding: 4px 0;
  font-weight: 400;

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