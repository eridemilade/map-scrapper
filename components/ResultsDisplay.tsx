import React from 'react';
import type { BusinessInfo } from '../types';
import { BusinessCard } from './BusinessCard';
import { CardSkeleton } from './CardSkeleton';
import { InfoIcon } from './icons/InfoIcon';

interface ResultsDisplayProps {
  businesses: BusinessInfo[];
  isLoading: boolean;
  hasSearched: boolean;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ businesses, isLoading, hasSearched }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-10 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <InfoIcon className="mx-auto h-12 w-12 text-gray-400"/>
        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Ready to search</h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Your business search results will appear here.</p>
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="text-center py-10 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <InfoIcon className="mx-auto h-12 w-12 text-gray-400"/>
        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No results found</h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search query for better results.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((business, index) => (
        <BusinessCard key={index} business={business} />
      ))}
    </div>
  );
};
