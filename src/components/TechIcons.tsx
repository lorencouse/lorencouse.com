import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiCloudflare,
  SiCloudflarepages,
  SiCpanel,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMariadb,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2 items-center align-middle')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} tipChildren={<p>{current.name}</p>}>
            <li className='text-lg text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  swift: {
    icon: SiSwift,
    name: 'Swift',
  },
  supabase: {
    icon: SiSupabase,
    name: 'Supabase',
  },

  wordpress: {
    icon: SiWordpress,
    name: 'WordPress',
  },
  cloudflare: {
    icon: SiCloudflare,
    name: 'Cloudflare',
  },
  cloudflarepages: {
    icon: SiCloudflarepages,
    name: 'Cloudflare Pages',
  },
  mariadb: {
    icon: SiMariadb,
    name: 'MariaDB',
  },
  cpanel: {
    icon: SiCpanel,
    name: 'cPanel',
  },
  redis: {
    icon: SiRedis,
    name: 'Redis',
  },
};
