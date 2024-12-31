import Image from 'next/image';
import React from 'react';

const ExperienceBlock = ({
  year,
  description,
  img,
  alt,
}: {
  year: string;
  description: string;
  img: string | undefined;
  alt: string | undefined;
}) => {
  return (
    <div className='border-l border-b border-gray-200 py-3 mt-6'>
      <div className='experience-header ml-4'>
        <span className='year rounded-full border bg-white dark:bg-black border-primary-300 text-md font-semibold px-2 py-1 -ml-7 bg-color-background'>
          {year}
        </span>
        <div className='ml-12 -mt-7'>
          <span>{description}</span>
        </div>
      </div>
      {img && alt && (
        <div className='timeline-image ml-16 -my-2'>
          <Image
            height={20}
            width={300}
            src={img}
            alt={alt}
            className='rounded-sm max-h-24 w-auto'
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceBlock;
