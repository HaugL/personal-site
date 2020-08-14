<template>
  <div id="contact" class="section-container section-background-secondary">
    <div class="section-header">
      CONTACT
      <div class="section-header-underline"/>
    </div>
    <div class='contact-form'>
      <p>Have a question or want to work together?</p>
      <input class="contact-form-input contact-name" v-model="name" placeholder="Name" />
      <textarea
        class="contact-form-input contact-form-input-textarea contact-message"
        v-model="message"
        placeholder="Message"
      />
      <input class="contact-form-input contact-email" v-model="email" placeholder="Email" />
      <p class='contact-form-error' v-if="error">
        {{ error }}
      </p>
      <p class='contact-form-success' v-if="successMessage">
        {{ successMessage }}
      </p>
      <button class='submit-button' v-on:click="submitContact">Submit</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'contact',
  data() {
    return {
      email: '',
      error: undefined,
      message: '',
      name: '',
      successMessage: undefined,
    };
  },
  methods: {
    submitContact() {
      if (!this.name || !this.message || !this.email) {
        this.error = 'Please fill out all fields before submitting';
      } else {
        this.error = undefined;
        let url = 'https://hooks.zapier.com/hooks/catch/4361127/x3hgml?';
        url += `name=${this.name}&email=${this.email}&message=${this.message}`;
        fetch(url, {
        }).then(() => {
          this.successMessage = 'Recieved! I will reach out to you soon.';
        }).catch(() => {
          this.error = 'Uh Oh! Something went wrong trying to contact me. Make sure your internet connection is working and try again.';
        });
      }
    },
  },
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #contact
    height: 600px
    .contact-form
      width: 350px
      margin: 0px auto 100px auto
      text-align: left
      .contact-form-error
        color: $pink
      .contact-form-success
        color: $bright-blue
      .contact-form-input
        width: 100%
        margin-bottom: 20px
        border: 2px solid $bright-blue
        border-radius: 4px
        padding-left: 5px
        height: 40px
      .contact-form-input-textarea
        height: 100px
        margin-bottom: 10px
      .contact-form-input::-webkit-input-placeholder
      .submit-button
        float: right
        background: $background
        color: white
        border: 2px solid $bright-blue
        padding: 5px 10px 5px 10px
      .submit-button::hover
        background: $bright-blue
</style>
