<template>
  <div class="home">
    <Particles />
    <Introduction />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import About from '@/components/home/About.vue';
import Contact from '@/components/home/Contact.vue';
import Introduction from '@/components/home/Introduction.vue';
import Particles from '@/components/home/Particles.vue';
import Portfolio from '@/components/home/Portfolio.vue';

export default {
  name: 'home',
  components: {
    About,
    Contact,
    Introduction,
    Particles,
    Portfolio,
  },
};
</script>
