import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from './App';

describe('App Integration Test', () => {
  beforeEach(() => {
    document.body.className = '';
    localStorage.clear();
  });

  it('should render both components correctly', () => {
    render(<App />);

    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Change Color/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Switch to Dark Mode/i })).toBeInTheDocument();
  });

  it('should toggle theme without affecting color', () => {
    render(<App />);

    const themeButton = screen.getByRole('button', { name: /Switch to Dark Mode/i });
    fireEvent.click(themeButton);
    expect(document.body.classList.contains('dark-mode')).toBe(true);

    const colorButton = screen.getByRole('button', { name: /Change Color/i });
    fireEvent.click(colorButton);
    expect(screen.getByTestId('color-box').style.backgroundColor).toBe('green');
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });

  it('should change color without affecting theme', () => {
    render(<App />);

    expect(document.body.classList.contains('dark-mode')).toBe(false);

    const colorButton = screen.getByRole('button', { name: /Change Color/i });
    fireEvent.click(colorButton);
    expect(screen.getByTestId('color-box').style.backgroundColor).toBe('green');

    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});
