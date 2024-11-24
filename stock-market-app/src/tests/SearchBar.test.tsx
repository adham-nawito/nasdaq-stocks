//@ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/stocks/SearchBar';
import '@testing-library/jest-dom';

const mockSetSearchQuery = jest.fn();

describe('SearchBar Component', () =>
{
  const searchQuery = 'Agilent Technologies';

  it('renders the search bar with correct placeholder and initial value', () =>
  {
    render(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} />);

    const inputElement = screen.getByPlaceholderText('Search stocks...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(searchQuery);
  });

  it('calls setSearchQuery on input change', () =>
  {
    render(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} />);

    const inputElement = screen.getByPlaceholderText('Search stocks...');

    fireEvent.change(inputElement, { target: { value: 'Tesla' } });

    expect(mockSetSearchQuery).toHaveBeenCalledTimes(1);
    expect(mockSetSearchQuery).toHaveBeenCalledWith('Tesla');
  });

  it('has the correct responsive classes for width', () =>
  {
    render(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} />);

    const inputElement = screen.getByPlaceholderText('Search stocks...');

    expect(inputElement).toHaveClass('md:w-[100px]');
    expect(inputElement).toHaveClass('lg:w-[300px]');
  });
});
