import { render, screen } from '@testing-library/vue';
import Error404Page from '../Error404Page.vue';
import vuetify from '../../../../../plugins/vuetify';

describe('Error404Page', () => {
  it('renders the component', () => {
    render(Error404Page, { global: { plugins: [vuetify] } });

    screen.getByText('Something is wrong');
  });

  it("doesn't have a test text", async () => {
    render(Error404Page, { global: { plugins: [vuetify] } });

    expect(() => screen.getByText('Everything is ok')).toThrow();
  });
});
