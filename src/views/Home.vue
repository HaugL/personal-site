<template>
  <div class="home">
    <div class="overlay">
      <h2>Hello, I'm Lianne Haug.</h2>
      <h2>I'm a full-stack web developer.</h2>
    </div>
    <Particles />
  </div>
</template>

<script>
// @ is an alias to /src
import Particles from '@/components/Particles.vue';

export default {
  name: 'home',
  components: {
    Particles,
  },
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  .overlay
    position: absolute
    text-align: center
    left: 0
    right: 0
    color: $white
</style>
