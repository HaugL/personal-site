<template>
  <div id="about" class="section-container section-background-secondary">
    <div class="section-header">
      ABOUT
      <div class="section-header-underline"/>
    </div>
     <!-- <b-container>
      <b-row v-for="highlight in highlights" :key = "highlight.id">
        <b-col col lg="2">HI</b-col>
      </b-row>
     </b-container> -->
    <div class="container highlights-container">
      <div class="row highlights-row">
        <div class="highlight col-md-3 col-sm-6" v-for="highlight in highlights" :key = "highlight.id">
          <div class="highlight-bubble" />
          <div class="highlight-title">{{ highlight.title }}</div>
          <div class="highlight-description">{{ highlight.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'about',
  data (){
    return {
      highlights: [
        {
          id: 1,
          title: "A",
          description: "A's Description",
          iconPath: ""
        },
        {
          id: 2,
          title: "B",
          description: "B's Description",
          iconPath: ""
        },
        {
          id: 3,
          title: "C",
          description: "C's Description",
          iconPath: ""
        },
        {
          id: 4,
          title: "D",
          description: "D's Description",
          iconPath: ""
        }
      ]
    }
  }
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #about
    height: calc(100vh)
  .highlights-container
    max-width: 90% 
  .highlights-row  
    .highlight-bubble
      background: $bright-blue
      height: 150px
      width: 150px
      border-radius: 50%
      margin: 0px auto 15px auto
    .highlight-title
      font-size: 24px
      font-weight: 700
    .highlight-description
      font-size: 16px

  
</style>
