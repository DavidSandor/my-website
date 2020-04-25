<template>
  <nav>
    <a class="navbar-brand" href="#">davidsandor</a>
    <router-link class="router-link" to="/">Home</router-link> |
    <router-link class="router-link" to="/references">References</router-link>
    <router-link class="router-link" to="/about">About me</router-link>
    <router-link class="router-link" to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {

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
  opacity: 0.95;
  padding: 0 $general-space;
  box-shadow: $container-shadow;

  & .navbar-brand {
    font-size: 16px;
    float: left;
    padding: 0;
    margin: 0;
  }
}

.router-link {
  text-decoration: none;
  color: black;
  margin: 6px;
  font-size: 16px;
  padding: 8px;

  &:hover {
    text-decoration: none;
    color: $primary-theme-color;
  }
}

.router-link-exact-active {
  color: $primary-bg-color;
  font-weight: 600;
  background-color: $primary-theme-color;

  &:hover {
    text-decoration: none;
    color: $primary-bg-color;
  }
}

</style>