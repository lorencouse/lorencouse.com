import * as React from 'react';

import { trackEvent } from '@/lib/analytics';

import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import SocialLinks from '../links/SocialLinks';
import TechStack from '../TechStack';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <FooterLinks />

        <div className='flex flex-row justify-between w-full max-w-4xl mt-6'>
          <div className='socials items-center gap-4 flex-wrap align-middle'>
            <p className='font-medium text-gray-600 dark:text-gray-300 text-center'>
              Reach me at:
            </p>
            <SocialLinks />
          </div>
          <div className='build-with items-center gap-4 flex-wrap align-middle'>
            <p className='font-medium text-gray-600 dark:text-gray-300 text-center'>
              This site is built with:
            </p>
            <TechStack />
          </div>
        </div>

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          Loren Couse - {new Date().getFullYear()}
        </p>
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
      href: '/guestbook',
      text: 'Guestbook',
      tooltip:
        'Leave whatever you like to say—message, appreciation, suggestions',
    },
    {
      href: '/subscribe',
      text: 'Subscribe',
      tooltip: 'Get an email whenever I post, no spam',
    },
    {
      href: 'https://lorencouse.com/rss.xml',
      text: 'RSS',
      tooltip: 'Add lorencouse.com blog to your feeds',
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
