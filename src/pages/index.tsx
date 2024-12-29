import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { IoArrowDownOutline, IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx.server';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Headshot from '@/components/Headshot';
import LC from '@/components/LC';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

export default function IndexPage({
  featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);

  const isLoaded = useLoaded();

  return (
    <>
      <Seo />
      <main>
        <section
          className={clsx(
            'min-h-main mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start',
          )}
        >
          <article className='layout'>
            <div className='flex flex-row justify-between flex-wrap-reverse gap-8 items-center'>
              <div className='intro-text'>
                <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
                  Hi!
                </h2>
                <h1
                  className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
                  data-fade='2'
                >
                  My name is <Accent>Lorén</Accent>
                </h1>
                <p
                  className='mt-2 max-w-xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-3 text-sm md:text-base 2xl:text-lg'
                  data-fade='2'
                  onClick={() => {
                    trackEvent('Social Link: Dimension', { type: 'link' });
                  }}
                >
                  Founder at{' '}
                  <CustomLink href='https://www.maleq.org'>MaleQ</CustomLink>
                </p>
                <p
                  className={clsx(
                    'mt-4 max-w-xl text-gray-700 dark:text-gray-200 md:mt-6',
                    'md:text-lg 2xl:text-xl',
                  )}
                  data-fade='3'
                >
                  I am a freelance entrepreneur working in the React Ecosystem.
                  My strength is building tools and solving problems with React
                  and Next.js. I am also a big fan of TypeScript and
                  TailwindCSS.
                </p>

                <p
                  className='mt-3 max-w-xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                  data-fade='4'
                >
                  First time here? Don't forget to check out my{' '}
                  <CustomLink href='/resume'>experience</CustomLink>!
                </p>
                <div
                  data-fade='5'
                  className='mt-8 flex flex-wrap gap-4 md:!text-lg'
                >
                  <div className='group relative'>
                    <div
                      className={clsx(
                        'absolute -inset-0.5 animate-tilt rounded blur',
                        'bg-gradient-to-r from-primary-300 to-primary-400',
                        'dark:from-primary-200 dark:via-primary-300',
                        'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200',
                      )}
                    />
                    <ButtonLink href='/projects'>See my projects</ButtonLink>
                  </div>
                  <ButtonLink href='/about'>More about me</ButtonLink>
                </div>
                <div
                  data-fade='6'
                  className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'
                >
                  <UnstyledLink
                    href='/resume'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors',
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Resume', { type: 'link' });
                    }}
                  >
                    <IoNewspaperSharp className='shrink-0' />
                    <span>Resumé</span>
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://linkedin.com/in/lorencouse'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors',
                    )}
                    onClick={() => {
                      trackEvent('Social Link: LinkedIn', { type: 'link' });
                    }}
                  >
                    <SiLinkedin className='shrink-0 transition-colors group-hover:text-black dark:group-hover:text-white' />
                    <span>@lorencouse</span>
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://github.com/lorencouse'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors',
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Github', { type: 'link' });
                    }}
                  >
                    <SiGithub className='shrink-0' />
                    <span>lorencouse</span>
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://www.instagram.com/cousethemouse/'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors',
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Bluesky', { type: 'link' });
                    }}
                  >
                    <SiInstagram className='shrink-0 transition-colors group-hover:text-[#0285FF]' />
                    <span>@cousethemouse</span>
                  </UnstyledLink>
                </div>
              </div>
              <div className='intro-image'>
                <Headshot />
              </div>
            </div>
          </article>
          <UnstyledLink
            href='#intro'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300',
            )}
          >
            <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10' />
          </UnstyledLink>
        </section>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='intro'
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article
                className={clsx(
                  'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                  'md:gap-4',
                )}
                data-fade='0'
              >
                <div className=' max-w-2xl md:mt-0'>
                  <h2 className='text-4xl md:text-6xl'>
                    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                      Let's Build Something Great
                    </Accent>
                  </h2>
                  <div className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                    I have a 12 year track record building{' '}
                    <strong>SEO optimized</strong> web applications that
                    generate{' '}
                    <Tooltip
                      withUnderline
                      tipChildren={
                        <>
                          Consistent, organic, SEO traffic with over 5,000
                          active daily users on MaleQ.org
                        </>
                      }
                    >
                      <span>real traffic</span>
                    </Tooltip>{' '}
                    , earn{' '}
                    <Tooltip
                      withUnderline
                      tipChildren={
                        <>
                          Personal e-commerce bussines with over $850,000 in
                          sales
                        </>
                      }
                    >
                      <span>real revenue</span>
                    </Tooltip>{' '}
                    , and bring real-world results.
                    <br />
                    <br />
                    My specialty is{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>
                      solving problems
                    </strong>{' '}
                    for my customers and building products that{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>
                      fundamentally
                    </strong>{' '}
                    improve quality of life. In my blog, I'm sharing how I
                    approach something and how my mental model affect my
                    learning about a certain topic.
                  </div>
                  <LC
                    className={clsx(
                      'absolute -bottom-20 right-0',
                      'translate-y-[37%] transform-gpu',
                      'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
                      'z-[-1] opacity-70 dark:opacity-30', // Changed z-10 to z-[-1]
                      'pointer-events-none', // Added pointer-events-none
                    )}
                  />
                </div>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Featured Projects</Accent>
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  React, Next.js, and SwiftUi applications, all built by me.
                </p>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedProjects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/projects'
                  onClick={() =>
                    trackEvent('Home: See more project', { type: 'navigate' })
                  }
                >
                  See more
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
      </main>
    </>
  );
}

export async function getStaticProps() {
  generateRss();

  const projects = await getAllFilesFrontmatter('projects');

  const featuredProjects = getFeatured(projects, [
    'aireio',
    'canker-core',
    'foldy-friends',
    'maleq',
    'rise-and-shine',
    'track-duplicate-deleter',
  ]);

  return {
    props: {
      featuredProjects,
    },
  };
}
