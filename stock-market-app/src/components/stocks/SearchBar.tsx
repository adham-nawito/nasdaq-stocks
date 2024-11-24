import React from 'react';

import { Input } from '../ui/input';

interface SearchBarProps
{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }: SearchBarProps) =>
{
  return (
    <Input
      type="search"
      placeholder="Search stocks..."
      className="md:w-[100px] lg:w-[300px]"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
