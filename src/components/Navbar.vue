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
  height: $navbar-height;
  line-height: $navbar-height;
  margin-bottom: 50px;
  text-align: right;
  background-color: $body-bg-color;
  opacity: 0.95;

  & .navbar-brand {
    float: left;
  }
}

.router-link {
  text-decoration: none;
  color: black;
  margin: 6px 18px;
  font-size: 20px;

  &:hover {
    text-decoration: none;
  }
}

.router-link-exact-active {
  color: $primary-theme-color;
  font-weight: bold;
}

</style>