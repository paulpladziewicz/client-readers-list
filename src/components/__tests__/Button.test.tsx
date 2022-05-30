import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import React from 'react';

describe('Button component', () => {
  it('should render appropriate text', () => {
    render(<Button text='Press Me' />);
    const renderedButton = screen.getByText('Press Me');
    expect(renderedButton).toBeTruthy();
  });
});
