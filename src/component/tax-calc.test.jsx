import { render, screen } from '@testing-library/react';
import TaxInput from './tax-calc';

test('It renders button and p correctly', () => {
    render(<TaxInput />);
    const tags = screen.getByRole(/button/)
    expect(tags).toBeInTheDocument();
} );         
  
