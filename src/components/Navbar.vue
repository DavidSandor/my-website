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
  margin-bottom: 20px;
  text-align: right;
  background-color: $primary-bg-color;
  opacity: 0.95;
  padding-left: 10px;

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
  padding: 10px;

  &:hover {
    text-decoration: none;
    color: $primary-theme-color;
  }
}

.router-link-exact-active {
  color: $primary-bg-color;
  font-weight: 600;
  background: linear-gradient(45deg, rgba(2,0,54,1) 0%, rgba(26,2,255,1) 100%);
  padding: 10px;

  &:hover {
    text-decoration: none;
    color: $primary-bg-color;
  }
}

</style>