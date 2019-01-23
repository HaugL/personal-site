import Vue from 'vue';
import { mount } from '@vue/test-utils';
import About from '@/components/home/About.vue';

import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

describe('About.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(About, {
      propsData: { },
    });
  });

  it('renders three highlights', () => {
    expect(wrapper.findAll('.highlight').length).toBe(3);
  });

  it('renders correct highlight titles', () => {
    expect(wrapper.findAll('.highlight-title').wrappers.map(w => w.text()))
      .toEqual(['Fast', 'Business Oriented', 'Scalable']);
  });

  it('renders six skills', () => {
    expect(wrapper.findAll('.skill-item').length).toBe(6);
  });

  it('renders correct skill names & percentages', () => {
    const namesToPercentages = {
      React: '90%',
      'Node.js': '70%',
      Javascript: '90%',
      'CSS/SASS': '60%',
      'Ruby/Rails': '70%',
      Postgres: '50%',
    };

    wrapper.findAll('.skill-item').wrappers.forEach((skillItem) => {
      const skillName = skillItem.find('.skill-bar-name').text();
      const skillPercentage = skillItem.find('.skill-percentage-title').text();
      expect(skillPercentage).toBe(namesToPercentages[skillName]);
    });
  });
});
