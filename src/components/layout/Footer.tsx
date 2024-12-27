import * as React from 'react';

import { trackEvent } from '@/lib/analytics';

import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import SocialLinks from '../links/SocialLinks';
import TechIcons from '../TechIcons';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <div className='flex flex-row flex-wrap gap-4 md:justify-between justify-center items-center w-full mt-4'>
          <FooterLinks />
          <div className='flex flex-row gap-x-2 items-center justify-center'>
            <span>Contact: </span>
            <SocialLinks />
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between items-center w-full mt-2'>
          <TechIcons
            techs={[
              'nextjs',
              'react',
              'typescript',
              'supabase',
              'cloudflarepages',
            ]}
          />
          <p className='my-2 text-sm text-gray-600 dark:text-gray-300'>
            Loren Couse - {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </footer>
  );
}

function FooterLinks() {
  const footerLinks: {
    href: string;
    text: string;
    tooltip: React.ReactNode;
  }[] = [
    {
      href: '/design',
      text: 'Design',
      tooltip: 'lorencouse.com color palette',
    },
    {
      href: '/statistics',
      text: 'Stats',
      tooltip: 'Blog, Projects, and Library Statistics',
    },
    {
      href: '/subscribe',
      text: 'Subscribe',
      tooltip: 'Get an email whenever I post, no spam',
    },
    {
      href: '/about',
      text: 'About',
      tooltip: 'About me, my work, and my blog',
    },
  ];
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} tipChildren={tooltip}>
          <UnstyledLink
            className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, { type: 'link' });
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}
