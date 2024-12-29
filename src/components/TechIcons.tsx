import clsx from 'clsx';
import * as React from 'react';
import {
  SiCloudflare,
  SiCloudflarepages,
  SiCpanel,
  SiFirebase,
  SiGit,
  SiIos,
  SiJavascript,
  SiMacos,
  SiMariadb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrettier,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <div className='flex gap-2 align-middle items-center'>
      <span className='text-sm text-gray-600 dark:text-gray-300'>
        Built with:
      </span>
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
    </div>
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
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  git: {
    icon: SiGit,
    name: 'Git',
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
  vercel: {
    icon: SiVercel,
    name: 'Vercel',
  },
  ios: {
    icon: SiIos,
    name: 'iOS',
  },
  macos: {
    icon: SiMacos,
    name: 'macOS',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
  woocommerce: {
    icon: SiWoocommerce,
    name: 'WooCommerce',
  },
};
