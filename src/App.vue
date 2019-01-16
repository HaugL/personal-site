<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <Home />
    <About />
  </div>
</template>


<script>
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Navbar from '@/components/Navbar.vue';

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
</style>
