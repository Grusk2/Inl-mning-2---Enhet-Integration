import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggler from './ThemeToggler';

describe('ThemeToggler Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  it('should initialize to light mode and toggle to dark mode', () => {
    render(<ThemeToggler />);

    expect(document.body.classList.contains('dark-mode')).toBe(false);
    expect(screen.getByText('Switch to Dark Mode')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Switch to Dark Mode'));

    expect(document.body.classList.contains('dark-mode')).toBe(true);
    expect(screen.getByText('Switch to Light Mode')).toBeInTheDocument();
  });

  it('should initialize to dark mode if it was saved in localStorage', () => {
    localStorage.setItem('theme', 'dark');

    render(<ThemeToggler />);

    expect(document.body.classList.contains('dark-mode')).toBe(true);
    expect(screen.getByText('Switch to Light Mode')).toBeInTheDocument();
  });

  it('should update localStorage on toggle', () => {
    render(<ThemeToggler />);

    fireEvent.click(screen.getByText('Switch to Dark Mode'));

    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(screen.getByText('Switch to Light Mode'));

    expect(localStorage.getItem('theme')).toBe('light');
  });
});
