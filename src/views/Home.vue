<template>
  <div id="home">
    <Particles />
    <Introduction />
    <About />
    <Resume />
    <Contact />
  </div>
</template>

<script>
import About from '@/components/home/About.vue';
import Contact from '@/components/home/Contact.vue';
import Introduction from '@/components/home/Introduction.vue';
import Particles from '@/components/home/Particles.vue';
import Resume from '@/components/home/Resume.vue';

export default {
  name: 'home',
  components: {
    About,
    Contact,
    Introduction,
    Particles,
    Resume,
  },
};
</script>


<style lang="sass">
  @import "@/assets/styles/base.sass"
  .section-container
    border-top: 20px solid $bright-blue
    padding-top: 50px
    text-align: center
    .section-header
      font-size: 40px
      font-weight: $font-bold
      .section-header-underline
        width: 70px
        height: 2px
        margin: 5px auto 100px auto
  .section-background-primary
    background-color: $background
    color: white
    .section-header-underline
      background-color: white
  .section-background-secondary
    background-color: $secondary-background
    .section-header-underline
      background-color: black

</style>
