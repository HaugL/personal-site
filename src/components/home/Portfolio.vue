<template>
  <div id="portfolio" class="section-container section-background-primary">
    <div class="section-header">
      PORTFOLIO
      <div class="section-header-underline"/>
    </div>
    <carousel
      :perPage="1"
    >
      <slide v-for="project in projects" v-bind:key="project.name">
        <div class="slide-title">{{ project.name }}</div>
        <img :src="project.image">
        <br/>
        <div class='portfolio-badge-group'>
          <div class="badge badge-secondary" v-for="skill in project.skills" v-bind:key="skill">
            {{ skill }}
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import plumRelishImage from '@/assets/images/portfolio/plum-relish.png';
import agileCentralImage from '@/assets/images/portfolio/agile-central.png';
import panaImage from '@/assets/images/portfolio/pana.png';

export default {
  name: 'portfolio',
  data() {
    return {
      projects: [
        {
          name: 'Plum Relish',
          image: plumRelishImage,
          skills: ['React.js', 'Redux.js', 'Ruby/Rails', 'PostgreSQL'],
        },
        {
          name: 'Agile Central',
          image: agileCentralImage,
          skills: ['React.js', 'Redux.js'],
        },
        {
          name: 'Pana',
          image: panaImage,
          skills: ['Node.js', 'Backbone.js', 'PostgreSQL'],
        },
      ],
    };
  },
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #portfolio
    padding-bottom: 100px
    .portfolio-badge-group
      display: inline-flex
      .badge
        margin: 20px 30px 0px 0px
        padding: 10px
    .VueCarousel-slide
      .slide-title
        font-size: 25px
        padding-bottom: 10px
        color: $pink
      @media (min-width: $screen-md )
        img
          width: 1000px
        .badge
          font-size: 20px
      @media (max-width: $screen-md )
        img
          width: 900px
        .badge
          font-size: 15px
      @media (max-width: $screen-sm )
        img
          width: 700px
        .badge
          font-size: 15px
      @media (max-width: $screen-xs )
        img
          width: 300px
        .badge
          font-size: 10px
          margin: 20px 10px 0px 0px
          padding: 10px
</style>
