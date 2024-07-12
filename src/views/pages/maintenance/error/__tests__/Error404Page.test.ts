import { render, screen } from '@/utils/helpers/test-utils';
import Error404Page from '../Error404Page.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Error404Page', () => {
  it('renders the component', () => {
    render(Error404Page);

    screen.getByText('Something is wrong');
  });

  it("doesn't have a test text", async () => {
    render(Error404Page);

    expect(() => screen.getByText('Everything is ok')).toThrow();
  });

  it('should be accessible', async () => {
    const { container } = render(Error404Page);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
