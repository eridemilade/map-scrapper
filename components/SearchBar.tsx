import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { LoadingSpinner } from './LoadingSpinner';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, onSearch, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative shadow-lg rounded-full">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., hardware stores in Brooklyn"
        className="block w-full text-lg pl-12 pr-32 py-4 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
        disabled={isLoading}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button
          onClick={onSearch}
          disabled={isLoading || !query.trim()}
          className="flex items-center justify-center h-12 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-colors duration-200"
        >
          {isLoading ? <LoadingSpinner /> : 'Search'}
        </button>
      </div>
    </div>
  );
};
