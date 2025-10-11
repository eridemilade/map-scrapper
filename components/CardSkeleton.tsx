import React from 'react';

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-pulse">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
      
      <div className="flex items-center space-x-2 mb-5">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
        <div className="flex">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full ml-1"></div>
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full ml-1"></div>
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full ml-1"></div>
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full ml-1"></div>
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>

      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6"></div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
         <div className="flex items-center space-x-3">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};
