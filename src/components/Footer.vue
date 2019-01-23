<template>
  <div id='footer'>
    <a href="#" v-scroll-to="'body'" class="scroll-top-button">
      <img src="@/assets/icons/icon-up-arrows.svg" />
    </a>
    <div class="social-icon-group">
      <a href="https://www.linkedin.com/in/lianne-haug-19189956" target=”_blank”>
        <img class="social-icon-item" src="@/assets/icons/icon-linkedin.svg" />
      </a>
      <a href="mailto:me@lianne.co">
        <img class="social-icon-item" src="@/assets/icons/icon-email.svg" />
      </a>
      <a href="https://github.com/HaugL" target=”_blank”>
        <img class="social-icon-item" src="@/assets/icons/icon-github.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #footer
    height: 200px
    background: $background
    text-align: center
    .scroll-top-button
      background: $pink
      color: $white
      padding: 20px 10px 10px 10px
      font-size: 50px
      font-weight: 700
      border-radius: 5px
      img
        height: 50px
    .social-icon-group
      margin-top: 30px
      .social-icon-item
        margin: 0px 10px 0px 10px
        width: 20px
</style>
