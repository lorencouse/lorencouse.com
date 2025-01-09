import React from 'react';
import { SiGithub } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';

import CustomLink from '@/components/links/CustomLink';

const GitRepoLink = ({
  title,
  repoName,
}: {
  title: string;
  repoName: string;
}) => {
  return (
    <div className='inline-flex items-center gap-2'>
      <SiGithub className='text-lg text-gray-800 dark:text-white' />
      <CustomLink
        onClick={() =>
          trackEvent(`Project Github: ${title}`, {
            type: 'link',
          })
        }
        href={`https://github.com/lorencouse/${repoName}`}
        className='mt-1'
      >
        Git Repo
      </CustomLink>
    </div>
  );
};

export default GitRepoLink;
