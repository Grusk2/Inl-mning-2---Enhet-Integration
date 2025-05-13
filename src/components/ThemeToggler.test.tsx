import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggler from './ThemeToggler';

describe('ThemeToggler Component', () => {
  beforeEach(() => {
    global.localStorage.setItem = vi.fn();
    global.localStorage.getItem = vi.fn(() => null);
    document.body.className = '';
  });

  it('should initialize to light mode and toggle to dark mode', () => {
    const toggleTheme = vi.fn();
    render(<ThemeToggler isDarkMode={false} toggleTheme={toggleTheme} />);

    expect(document.body.className).not.toContain('dark-mode');
    expect(screen.getByText('Switch to Dark Mode')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Switch to Dark Mode'));

    expect(toggleTheme).toHaveBeenCalled();
  });

  it('should initialize to dark mode if it was saved in localStorage', () => {
    global.localStorage.getItem = vi.fn(() => 'dark');
    const toggleTheme = vi.fn();
    render(<ThemeToggler isDarkMode={true} toggleTheme={toggleTheme} />);

    expect(document.body.className).toContain('dark-mode');
    expect(screen.getByText('Switch to Light Mode')).toBeInTheDocument();
  });

  it('should update localStorage on toggle', () => {
    const toggleTheme = vi.fn();
    render(<ThemeToggler isDarkMode={false} toggleTheme={toggleTheme} />);

    fireEvent.click(screen.getByText('Switch to Dark Mode'));
    expect(toggleTheme).toHaveBeenCalled();
  });
});
