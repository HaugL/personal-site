<template>
  <div class='nav'>
    <div class='nav-link-container'>
      <a href="#" v-scroll-to="'#about'">About</a>
      <a href="#" v-scroll-to="'#resume'">Resume</a>
      <a href="#" v-scroll-to="'#contact'">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  .nav
    height: $navbar-height
    padding: 20px
    background-color: $background
    color: $bright-blue
    text-align: center
    .nav-link-container
      margin-left: auto
      margin-right: auto
      left: 0
      right: 0
      a
        padding-left: 35px
        padding-right: 35px
        text-decoration: underline !important
        &:hover
          color: $pink
          opacity: .8
</style>
