<template>
  <div id='particles-js'></div>
</template>

<script>
import particleConfig from '@/utils/particlesjs-config.json';

require('particles.js');

export default {
  name: 'ParticlesJS',

  mounted() {
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', particleConfig);
    },
  },

};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #particles-js
    position: fixed
    top: $navbar-height
    width: 100%
    background:#252934
    position: absolute
    z-index: 0
    @supports (-webkit-overflow-scrolling: touch)
      height: 600px
    @supports not (-webkit-overflow-scrolling: touch)
      height: 100%
</style>
