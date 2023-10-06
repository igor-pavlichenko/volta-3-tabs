import { render, screen } from '@testing-library/react';
import Home from './page';

test('Smoke test', () => {
  render(<Home />);
  expect(screen.getByTestId('company_logo')).toHaveTextContent('Volta');
});
