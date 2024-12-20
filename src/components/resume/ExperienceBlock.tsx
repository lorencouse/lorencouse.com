import Image from 'next/image';
import React from 'react';

import CustomLink from '../links/CustomLink';

const ExperienceBlock = ({
  year,
  location,
  locationLink,
  city,
  role,
  description,
  img,
}: {
  year: string;
  location: string;
  locationLink: string;
  city: string;
  role: string;
  description: string;
  img: string;
}) => {
  const descriptionLines = description.split('\n');

  return (
    <div className='border-l border-b border-gray-200 py-3 mt-6'>
      <div className='experience-header ml-4'>
        <span className='year rounded-full border bg-white dark:bg-black border-primary-300 text-xs font-bold px-2 py-1 -ml-7 bg-color-background'>
          {year}
        </span>
        <span className='mx-1'>-</span>
        <CustomLink href={locationLink}>
          <span className='location text-sm'>{location}</span>
        </CustomLink>
        <span className='mx-1'>-</span>
        <span className='role text-sm '>{city}</span>
      </div>
      <div className='experience-content mx-4 -my-2'>
        <div className='role-name flex flex-row'>
          <div>
            <Image
              height={30}
              width={30}
              src={img}
              alt={location}
              className='rounded-sm'
            />
          </div>
          <h3 className='text-lg font-bold pt-1 pl-3'>{role}</h3>
        </div>
        <div className=''>
          <ul className='-mt-5'>
            {descriptionLines.map((line, index) => (
              <li key={index} className='text-sm'>
                {line}
              </li>
            ))}
          </ul>
        </div>{' '}
      </div>
    </div>
  );
};

export default ExperienceBlock;
