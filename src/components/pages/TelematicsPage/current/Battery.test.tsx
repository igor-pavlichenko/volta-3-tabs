import { render, screen } from '@testing-library/react';
import Battery from './Battery';

test('Battery smoke test', () => {
  render(<Battery level={20} temperature={30} />);
  // range formula = level * 2
  expect(screen.getByTestId('Battery')).toHaveTextContent('40 km');
  expect(screen.getByTestId('Battery')).toHaveTextContent('30ºC');
});
