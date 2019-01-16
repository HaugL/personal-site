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
  #particles-js
    width: 100%
    height: 100%
    background:#252934
    position: absolute
    z-index: -1
</style>
