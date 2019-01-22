<template>
  <div id="about" class="section-container section-background-secondary">
    <div class="section-header">
      ABOUT
      <div class="section-header-underline"/>
    </div>
    <div class="container about-grid-container">
      <div class="row highlights-row">
        <div class="highlight col-md-4 col-sm-12"
          v-for="highlight in highlights"
          v-bind:key="highlight.id"
        >
          <div class="highlight-bubble">
            <img v-bind:style="{ ...highlight.iconStyles }"class="highlight-bubble-icon" :src="highlight.icon">
          </div>
          <div class="highlight-title">{{ highlight.title }}</div>
          <div class="highlight-description">{{ highlight.description }}</div>
        </div>
      </div>
      <div class="row skills-row">
        <div class="who-column col-md-5 col-sm-12">
          <img class="headshot" src="@/assets/images/headshot.jpg" />
          <div class="headshot-title">Who?</div>
          <div class="headshot-description">
            I am a Sr. Engineer for <a href="https://buildit.wiprodigital.com/">Buildit @ Wipro</a>, a two time CTO and a Techstars (Boulder '14') founder.
            <br/>
            <a href="#" v-scroll-to="'#contact'">Let's make something special.</a>
          </div>
        </div>
        <div class="skills col-md-7 col-sm-12">
          <div class="skill-item" v-for="skill in skills" v-bind:key="skill.name">
            <div class="skill-bar">
              <div class="skill-bar-fill" v-bind:style="{ width: skill.percentage + '%' }">
                <div class="skill-bar-name">{{ skill.name }}</div>
              </div>
              <span class='skill-percentage-title'>{{ skill.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import speedIcon from '@/assets/icons/icon-speed.svg';
import successPackageIcon from '@/assets/icons/icon-package-success.svg';
import routePackage from '@/assets/icons/icon-route.svg';

export default {
  name: 'about',
  data() {
    return {
      highlights: [
        {
          id: 1,
          title: 'Fast',
          description: 'I ship code quickly so you can deliver values to your users sooner.',
          icon: speedIcon,
          iconStyles: {
            height: '75px',
            'margin-top': '45px'
          },
        },
        {
          id: 2,
          title: 'Business Oriented',
          description: 'The goals of the business are first and front for all engineering decisions made.',
          icon: successPackageIcon,
          iconStyles: {
            height: '100px',
            'margin-top': '40px',
            'margin-left': '10px'
          },
        },
        {
          id: 3,
          title: 'Scalable',
          description: 'I implement the little things that will matter down the road, but won\'t hold us up today.',
          icon: routePackage,
          iconStyles: {
            height: '100px',
            'margin-top': '30px',
          },
        },
      ],
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'Node.js', percentage: 70 },
        { name: 'Javascript', percentage: 90 },
        { name: 'CSS/SASS', percentage: 60 },
        { name: 'Ruby/Rails', percentage: 70 },
        { name: 'Postgres', percentage: 50 },
      ],
    };
  },
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #about
    padding-bottom: 100px
  .about-grid-container
    max-width: 90%
    .highlights-row
      margin-bottom: 50px
      .highlight
        margin-bottom: 50px
      .highlight-bubble
        background: $bright-blue
        height: 150px
        width: 150px
        border-radius: 50%
        margin: 0px auto 50px auto
    .headshot
      height: 300px
      border-radius: 50%
    .headshot-title, .highlight-title
      font-size: 24px
      font-weight: 700
    .headshot-description, .highlight-description
      font-size: 16px
  .skills
    padding-top: 20px
    .skill-item
      margin: 25px 0px 20px 20px
      .skill-bar
        position: relative
        display: flex
        max-width: 90%
        background: #eee
        color: #666
        span
          margin-left: auto
          padding: 0px 10px 0px 10px
          font-size: 12px
        .skill-bar-fill
          background: $bright-blue
        .skill-bar-name
          width: 110px
          background: $background
          color: white
          font-size: 14px
          height: 100%
          @media (max-width: $screen-xs )
            width: 85px
            padding-left: 5px
            text-align: left

</style>
