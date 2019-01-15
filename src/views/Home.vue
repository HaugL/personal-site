<template>
  <div class="home">
    <div class="overlay">
      <div class='title-text'>
        Hello, I'm <div class='name-highlight'>Lianne Haug.</div>
      </div>
      <div class='title-text'>I build websites.</div>
    </div>
    <Particles />
  </div>
</template>

<script>
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
    padding-top: 250px
    .title-text
      font-size: 21px
      .name-highlight
        display: -webkit-inline-box
        color: $pink
</style>
