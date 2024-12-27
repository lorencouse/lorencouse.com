import React from 'react';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import UnstyledLink from './UnstyledLink';
import Accent from '../Accent';
import Tooltip from '../Tooltip';

export default function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='mail-icon'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click the mail logo to copy'
                : 'Copied to clipboard 🥳 '}
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
            className='rounded-sm align-middle items-center focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='my-auto h-5 w-5 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
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
            <social.icon className='my-auto h-5 w-5 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

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
