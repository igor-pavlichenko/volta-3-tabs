import { render, screen } from '@testing-library/react';
import Speed from './Speed';

test('Speed smoke test', () => {
  render(<Speed value={33} />);
  expect(screen.getByTestId('Speed')).toHaveTextContent('33');
  expect(screen.getByTestId('Speed')).toHaveTextContent('km/h');
});
