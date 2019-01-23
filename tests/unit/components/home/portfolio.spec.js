import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Portfolio from '@/components/home/Portfolio.vue';

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

describe('About.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Portfolio, {
      propsData: { },
    });
  });

  it('renders three portfolio items', () => {
    expect(wrapper.findAll('.VueCarousel-slide').length).toBe(3);
  });

  it('renders correct skills per slide', () => {
    const namesToSkills = {
      'Plum Relish': ['React', 'Redux', 'Ruby/Rails', 'PostgreSQL'],
      'Agile Central': ['React', 'Redux'],
      Pana: ['Node.js', 'Backbone', 'PostgreSQL'],
    };
    wrapper.findAll('.VueCarousel-slide').wrappers.forEach((slide) => {
      const slideTitle = slide.find('.slide-title').text();
      const slideSkills = slide.findAll('.badge').wrappers.map(badge => badge.text());

      expect(slideSkills).toEqual(namesToSkills[slideTitle]);
    });
  });
});
