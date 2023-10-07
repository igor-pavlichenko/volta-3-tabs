import { render, screen } from '@testing-library/react';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator', () => {
  it('should be visible', () => {
    render(<LoadingIndicator loading />);
    const element = screen.getByTestId('LoadingIndicator');
    const style = window.getComputedStyle(element);
    expect(style.opacity).toBe('1');
  });

  it('should NOT be visible', () => {
    render(<LoadingIndicator loading={false} />);
    const element = screen.getByTestId('LoadingIndicator');
    const style = window.getComputedStyle(element);
    expect(style.opacity).toBe('0');
  });
});
