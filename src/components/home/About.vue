<template>
  <div id="about" class="section-container section-background-secondary">
    <div class="section-header">
      ABOUT
      <div class="section-header-underline"/>
    </div>
    <div class="container about-grid-container">
      <div class="row highlights-row">
        <div class="highlight col-md-3 col-sm-6"
          v-for="highlight in highlights"
          v-bind:key="highlight.id"
        >
          <div class="highlight-bubble" />
          <div class="highlight-title">{{ highlight.title }}</div>
          <div class="highlight-description">{{ highlight.description }}</div>
        </div>
      </div>
      <div class="row skills-row">
        <div class="who-column col-md-5 col-sm-12">
          <img class="headshot" src="@/assets/images/headshot.jpg" />
          <div class="headshot-title">Who?</div>
          <div class="headshot-description">
            Description of Stuff
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
export default {
  name: 'about',
  data() {
    return {
      highlights: [
        {
          id: 1,
          title: 'A',
          description: 'A\'s Description',
          iconPath: '',
        },
        {
          id: 2,
          title: 'B',
          description: 'B\'s Description',
          iconPath: '',
        },
        {
          id: 3,
          title: 'C',
          description: 'C\'s Description',
          iconPath: '',
        },
        {
          id: 4,
          title: 'D',
          description: 'D\'s Description',
          iconPath: '',
        },
      ],
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'Node.js', percentage: 70 },
        { name: 'Javascript', percentage: 90 },
        { name: 'CSS/SASS', percentage: 50 },
        { name: 'Ruby/Rails', percentage: 70 },
        { name: 'PostgreSQL', percentage: 40 },
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
      margin-bottom: 100px
      .highlight-bubble
        background: $bright-blue
        height: 150px
        width: 150px
        border-radius: 50%
        margin: 0px auto 15px auto
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

</style>
