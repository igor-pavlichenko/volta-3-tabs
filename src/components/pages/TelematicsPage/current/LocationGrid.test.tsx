import { render, screen } from '@testing-library/react';
import LocationGrid from './LocationGrid';

test('LocationGrid smoke test', () => {
  render(<LocationGrid value={{ latitude: 0, longitude: -1 }} />);
  expect(screen.getByTestId('LocationGrid')).toHaveTextContent('0');
  expect(screen.getByTestId('LocationGrid')).toHaveTextContent('-1');
});
