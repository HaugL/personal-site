import { mount } from '@vue/test-utils';
import Contact from '@/components/home/Contact.vue';

describe('About.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Contact, {
      propsData: { },
    });
  });

  const setText = (inputClass, text) => {
    const input = wrapper.find(inputClass);
    input.setValue(text);
  };

  it('does not render form error message on mount', () => {
    expect(wrapper.find('.contact-form-error').exists()).toBe(false);
  });

  it('does not render form success message on mount', () => {
    expect(wrapper.find('.contact-form-success').exists()).toBe(false);
  });

  describe('on submit', () => {
    describe('when not all data is entered', () => {
      beforeEach(() => {
        wrapper.find('.submit-button').trigger('click');
      });

      it('displays an error', () => {
        expect(wrapper.find('.contact-form-error').exists()).toBe(true);
      });
    });

    describe('when all data is entered', () => {
      beforeEach(() => {
        setText('.contact-name', 'Jane Doe');
        setText('.contact-message', 'Hi there!');
        setText('.contact-email', 'jane@doe.com');
      });

      describe('on success send', () => {
        let url; let
          calledFetch;
        beforeEach(() => {
          global.fetch = (urlParam) => {
            calledFetch = true;
            url = urlParam;
            return Promise.resolve();
          };
          wrapper.find('.submit-button').trigger('click');
        });

        it('does not show an error', () => {
          expect(wrapper.find('.contact-form-error').exists()).toBe(false);
        });

        it('it calls fetch ', () => {
          expect(calledFetch).toBe(true);
        });

        it('it calls fetch with submitted name', () => {
          expect(url).toContain('Jane Doe');
        });

        it('it calls fetch with submitted message', () => {
          expect(url).toContain('Hi there!');
        });

        it('it calls fetch with submitted email', () => {
          expect(url).toContain('jane@doe.com');
        });

        it('renders success message', () => {
          expect(wrapper.find('.contact-form-success').exists()).toBe(true);
        });
      });

      describe('on unsuccessul send', () => {
        beforeEach(() => {
          global.fetch = () => Promise.reject();
          wrapper.find('.submit-button').trigger('click');
        });

        it('it shows a specific error', () => {
          expect(wrapper.find('.contact-form-error').exists()).toBe(true);
          expect(wrapper.find('.contact-form-error').text()).toContain('Something went wrong');
        });
      });
    });
  });
});
