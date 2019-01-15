<template>
  <div id='particles-js'></div>
</template>

<script>
import particleConfig from '../utils/particlesjs-config.json';

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
    height: calc(100vh + 53px)
    width: 100%
    background: $background
    position: absolute
    z-index: -1
    border-bottom: 10px solid $bright-blue
</style>
