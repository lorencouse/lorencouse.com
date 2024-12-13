import clsx from 'clsx';
import * as React from 'react';
import {
  SiCloudflare,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
        go-to framework thanks to its static generation, dynamic paths, and
        superior SEO.{' '}
        <em>
          Did I mention? I am really loving the new App router and server-side
          functions.
        </em>
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href='https://reactjs.org/'>React</CustomLink>, underlying
        library of Next.js. I love the declarative approach and the ecosystem.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
        , has made me love web development! Its built in type checking has been
        a game changer for my projects' debugging and stability.
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink> is
        awesome, I have never achieved this much reusability. Make sure you get
        the{' '}
        <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'cloudflare',
    icon: SiCloudflare,
    tooltip: (
      <>
        <CustomLink href='https://cloudflare.com/'>Cloudflare</CustomLink>, my
        go-to hosting service and global CDN. Super fast, scalable, and
        affordable.
      </>
    ),
  },
  {
    id: 'supabase',
    icon: SiSupabase,
    tooltip: (
      <>
        <CustomLink href='https://www.supabase.com'>Supabase</CustomLink>, great
        and simple all-in-one PostgreSQL database, plus easy to set up user
        auth.
      </>
    ),
  },
];
