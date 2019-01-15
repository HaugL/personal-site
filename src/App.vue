<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <div class='scrollable-page'>
      <Home />
    </div>
    <div class='scrollable-page'>
      <About />
    </div>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

export default {
  name: 'App',
  components: {
    About,
    Home,
    Navbar
  }
}
</script>

<style lang="scss">
  @import "assets/styles/base.sass";
  @import "~bootstrap/scss/bootstrap.scss";
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style lang="sass">
  .scrollable-page
    height: calc(100vh + 53px)
    width: 100%
  .page-divider
    border-bottom: 5px solid red
</style>
