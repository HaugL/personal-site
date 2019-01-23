<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
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
