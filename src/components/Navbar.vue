<template>
  <div class='nav'>
    <div class='nav-link-container'>
      <a href='/about'>About</a>
      <a href='/portfolio'>Portfolio</a>
      <a href='/contact'>Contact</a>
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
    height: 35px
    padding: 20px
    background-color: $background
    color: $bright-blue
    text-align: center
    .nav-link-container
      width: 500px
      margin-left: auto
      margin-right: auto
      a
        padding-left: 35px
        padding-right: 35px
        text-decoration: underline !important
        &:hover
          color: $pink
          opacity: .8
</style>
