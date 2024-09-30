import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders Contact heading', () => {
    render(<Contact />);
    const headingElement = screen.getByText(/Contact/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders phone number', () => {
    render(<Contact />);
    const phoneElement = screen.getByText(/Phone: \(669\) 340-6795/i);
    expect(phoneElement).toBeInTheDocument();
  });

  test('renders email link', () => {
    render(<Contact />);
    const emailLink = screen.getByText(/shahchayan9@gmail.com/i);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:shahchayan9@gmail.com');
  });

  test('renders location', () => {
    render(<Contact />);
    const locationElement = screen.getByText(/Location: San Jose, CA/i);
    expect(locationElement).toBeInTheDocument();
  });
});