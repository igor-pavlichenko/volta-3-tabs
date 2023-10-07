import { render, screen } from '@testing-library/react';
import RadioTab from './RadioTab';

test('Smoke test', () => {
  render(<RadioTab name="test_radio" label="test label" />);
  expect(screen.getByTestId('test_radio')).toHaveTextContent('test label');
});
