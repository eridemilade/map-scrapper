import React from 'react';
import type { BusinessInfo } from '../types';
import { BuildingOfficeIcon } from './icons/BuildingOfficeIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { TagIcon } from './icons/TagIcon';
import { StarIcon } from './icons/StarIcon';
import { ClockIcon } from './icons/ClockIcon';

interface BusinessCardProps {
  business: BusinessInfo;
}

const InfoRow: React.FC<{ icon: React.ReactNode; text?: string; href?: string }> = ({ icon, text, href }) => {
  if (!text) return null;

  const content = (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5">{icon}</div>
      <span className="text-gray-600 dark:text-gray-300 break-words">{text}</span>
    </div>
  );

  if (href && (href.startsWith('http') || href.startsWith('tel'))) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
};

const RatingDisplay: React.FC<{ rating?: number; reviewCount?: number }> = ({ rating, reviewCount }) => {
    if (typeof rating !== 'number' || rating < 0) return null;

    return (
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-bold text-yellow-500">{rating.toFixed(1)}</span>
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${rating > i ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                ))}
            </div>
            {typeof reviewCount === 'number' && <span>({reviewCount.toLocaleString()} reviews)</span>}
        </div>
    );
};


export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate pr-2 flex-1">{business.name}</h3>
        </div>

        <div className="mt-2 mb-4">
            <RatingDisplay rating={business.rating} reviewCount={business.reviewCount} />
        </div>

        {business.summary && (
          <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm">{business.summary}</p>
        )}
        <div className="space-y-4 text-sm">
          <InfoRow icon={<BuildingOfficeIcon />} text={business.address} />
          <InfoRow icon={<PhoneIcon />} text={business.phone} href={`tel:${business.phone}`} />
          <InfoRow icon={<GlobeAltIcon />} text={business.website} href={business.website} />
          <InfoRow icon={<ClockIcon />} text={business.openingHours} />
          <InfoRow icon={<TagIcon />} text={business.category} />
        </div>
      </div>
    </div>
  );
};
