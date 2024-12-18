import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

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

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click the mail logo to copy'
                : 'Copied to clipboard 🥳'}
              <Accent className='inline-block font-medium'>
                contact@lorencouse.com
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('contact@lorencouse.com').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => (
        <Tooltip
          interactive={false}
          key={social.href}
          tipChildren={social.text}
        >
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
            }}
          >
            <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const footerLinks: { href: string; text: string; tooltip: React.ReactNode }[] =
  [
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

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://github.com/lorencouse',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/lorencouse/',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
  {
    href: 'https://www.instagram.com/cousethemouse/',
    icon: SiInstagram,
    id: 'Instagram',
    text: (
      <>
        My life and travels on{' '}
        <Accent className='font-medium'>Instagram</Accent>
      </>
    ),
  },
  {
    href: 'https://www.youtube.com/@loodanlive/videos',
    icon: SiYoutube,
    id: 'Youtube',
    text: (
      <>
        Follow me on <Accent className='font-medium'>YouTube</Accent>!
      </>
    ),
  },
];
