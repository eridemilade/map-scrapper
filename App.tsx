import React, { useState, useCallback } from 'react';
import { SearchBar } from './components/SearchBar';
import { ResultsDisplay } from './components/ResultsDisplay';
import { fetchBusinessInfo } from './services/geminiService';
import type { BusinessInfo } from './types';
import { MapPinIcon } from './components/icons/MapPinIcon';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [businesses, setBusinesses] = useState<BusinessInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      setError('Please enter a search query.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setBusinesses([]);

    try {
      const results = await fetchBusinessInfo(query);
      setBusinesses(results);
    } catch (err) {
      setError('Failed to fetch business information. Please check your API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-4">
             <MapPinIcon className="h-10 w-10 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Business Info Finder
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Enter a query like "coffee shops in New York" to find business details using AI.
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        </div>
        
        {error && <p className="text-center text-red-500 bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">{error}</p>}
        
        <ResultsDisplay
          businesses={businesses}
          isLoading={isLoading}
          hasSearched={hasSearched}
        />
      </main>
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>Powered by Gemini API</p>
      </footer>
    </div>
  );
};

export default App;
