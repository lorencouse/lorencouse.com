import React from 'react';

import CustomLink from '../links/CustomLink';

const ExperienceBlock = ({
  year,
  location,
  locationLink,
  role,
  description,
}: {
  year: string;
  location: string;
  locationLink: string;
  role: string;
  description: string;
}) => {
  return (
    <div className='border-l border-b border-gray-200 py-3'>
      <div className='experience-header'>
        <span className='year rounded-full border bg-white dark:bg-black border-primary-300 text-xs font-bold px-2 py-1 -ml-3 bg-color-background'>
          {year}
        </span>
        <span className='mx-1'>-</span>
        <CustomLink href={locationLink}>
          <span className='location text-sm'>{location}</span>
        </CustomLink>
      </div>
      <div className='experience-content mx-4 -my-2'>
        <h3 className='text-lg font-bold'>{role}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceBlock;
