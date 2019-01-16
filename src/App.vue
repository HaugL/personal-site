<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <Particles />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>


<script>
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';
import Navbar from '@/components/Navbar.vue';
import Particles from '@/components/Particles.vue';
import Portfolio from '@/views/Portfolio.vue';

export default {
  name: 'App',
  components: {
    About,
    Contact,
    Home,
    Navbar,
    Particles,
    Portfolio,
  },
};
</script>

<style lang="scss">
  @import "assets/styles/base.sass";
  @import "~bootstrap/scss/bootstrap.scss";
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style lang="sass">
</style>
