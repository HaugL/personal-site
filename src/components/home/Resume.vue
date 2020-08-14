<template>
  <div id="resume" class="section-container section-background-primary">
    <div class="section-header">
      WHAT I'VE BUILT
      <div class="section-header-underline"/>
    </div>
    <div class="resume-section">
      <b-row>
        <b-col
          sm="12"
          md="6"
          lg="4"
          class="resume-item"
          v-for="item in resumeItems"
          v-bind:key="item.name"
        >
          <img :src="item.image"/>
          <div class='resume-item-company-name'>{{ item.companyName }}</div>
          <div class='resume-item-job-title'>{{ item.jobTitle }}</div>
          <div class='resume-badge-group'>
            <div class="badge badge-secondary" v-for="skill in item.skills" v-bind:key="skill">
              {{ skill }}
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import checkrLogo from '@/assets/images/resume/checkr_logo.png';
import plumRelishLogo from '@/assets/images/resume/plumrelish_logo.jpg';
import wiproLogo from '@/assets/images/resume/wipro_logo.png';
import caLogo from '@/assets/images/resume/ca_logo.jpg';
import panaLogo from '@/assets/images/resume/pana_logo.jpg';
import gnipLogo from '@/assets/images/resume/gnip_logo.png';

export default {
  name: 'portfolio',
  data() {
    return {
      resumeItems: [
        {
          companyName: 'Checkr',
          image: checkrLogo,
          jobTitle: 'Senior Software Engineer',
          skills: ['React', 'Ruby on Rails', 'Kafka', 'Postgres', 'Sidekiq'],
        },
        {
          companyName: 'Buildit @ Wipro',
          image: wiproLogo,
          jobTitle: 'Senior Software Engineer',
          skills: ['React.js', 'Vue.js', 'PHP'],
        },
        {
          companyName: 'Plum Relish',
          image: plumRelishLogo,
          jobTitle: 'CTO',
          skills: ['React', 'Redux', 'Ruby/Rails', 'PostgreSQL'],
        },
        {
          companyName: 'CA Technologies',
          image: caLogo,
          jobTitle: 'Senior Software Engineer',
          skills: ['React', 'Redux'],
        },
        {
          companyName: 'Pana',
          image: panaLogo,
          jobTitle: 'CTO & Co-Founder',
          skills: ['Node.js', 'Backbone.js', 'Ruby/Rails', 'Postgres'],
        },
        {
          companyName: 'Gnip',
          image: gnipLogo,
          jobTitle: 'Software Engineer',
          skills: ['Java', 'Kafka'],
        },
      ],
    };
  },
};
</script>

<style lang="sass">
  @import "@/assets/styles/base.sass"
  #resume
    padding-bottom: 50px
    .resume-section
      .resume-item
        margin-bottom: 100px;
        img
          height: 150px
          border-radius: 50%
        .resume-item-company-name
          font-size: 20px;
          margin-top: 5px;
          color: $pink
        .resume-item-job-title
          margin-top: 5px;
        .resume-badge-group
          display: inline-flex
          .badge
            margin: 10px 5px 0px 5px
            padding: 10px
</style>
