<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/references">References</router-link>
    <router-link to="/about">About me</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '@/style/_variables.scss';

nav {
  height: $navbar-height;
}

</style>