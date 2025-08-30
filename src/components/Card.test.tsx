import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders with title and children', () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Card title="Test">Content</Card>);
    const card = screen.getByText('Test').closest('div');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('shadow-md');
  });

  it('applies elevated variant classes', () => {
    render(
      <Card title="Test" variant="elevated">
        Content
      </Card>
    );
    const card = screen.getByText('Test').closest('div');
    expect(card).toHaveClass('shadow-xl');
    expect(card).toHaveClass('transform');
  });

  it('applies outlined variant classes', () => {
    render(
      <Card title="Test" variant="outlined">
        Content
      </Card>
    );
    const card = screen.getByText('Test').closest('div');
    expect(card).toHaveClass('border-2');
    expect(card).toHaveClass('border-gray-200');
  });

  it('applies custom className', () => {
    render(
      <Card title="Test" className="custom-class">
        Content
      </Card>
    );
    const card = screen.getByText('Test').closest('div');
    expect(card).toHaveClass('custom-class');
  });
});
