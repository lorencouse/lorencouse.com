import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CustomImg from '@/components/images/CustomImg';
import CustomLink from '@/components/links/CustomLink';
import SocialLinks from '@/components/links/SocialLinks';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo
        templateTitle='About'
        description='Lorén is a front-end developer that started learning in September 2021. He writes blogs about his approach and mental models on understanding topics in front-end development.'
      />
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-12'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Lorén Couse</Accent>
            </h1>
            <div className='md:mt-4 mt-0' data-fade='2'>
              <CustomImg
                className='float-right ml-6 w-56 md:w-96 rounded-full -mt-14'
                publicId='/images/loren-couse-blue-500.jpg'
                width='500'
                height='500'
                alt='Photo of me looking really professional and can definitely impress your boss'
                preview={false}
                title='Loren Couse Headshot Blue Background'
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Lorén. I started my web development journey in
                  July, 2012, launching my first web site,{' '}
                  <CustomLink href='https://www.maleq.org'>
                    MaleQ.org
                  </CustomLink>
                  . What started as a hobby project and personal blog has grown
                  into a full-business which I have been running for the last 12
                  years.
                </p>
                <p data-fade='4'>
                  In 2021, I decided to take my web development skills to the
                  next level and started learning front-end development. I
                  finished my web development bootcamp at{' '}
                  <CustomLink href='https://www.appbrewery.com/p/the-complete-web-development-course'>
                    The App Brewery
                  </CustomLink>{' '}
                  in 2022, and have been building{' '}
                  <CustomLink href='/projects'>projects</CustomLink> ever since.
                </p>
                <p data-fade='5'>
                  This site is a showcase of my projects, and personal life. I
                  will continue to share my work and insights on web development
                  here. Feel free to reach out to me if you have any questions
                  or need help with your own projects. Together we can build
                  something great!
                </p>
              </article>
              <h3 className='h4 mt-4' data-fade='6'>
                What I'm up to?
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    I am the founder and full-stack engineer at{' '}
                    <CustomLink
                      onClick={() => trackEvent('Now: MaleQ', { type: 'link' })}
                      href='https://www.maleq.org'
                    >
                      MaleQ
                    </CustomLink>
                  </li>
                  <li>
                    I'm a start up mentor at Taiwan's{' '}
                    <CustomLink
                      onClick={() => trackEvent('Now: Dakuo', { type: 'link' })}
                      href='https://dakuo.koda.net.tw/teams.html'
                    >
                      Dakuo
                    </CustomLink>{' '}
                    incubator hub.
                  </li>
                  <li>
                    I'm an SEO consultant (
                    <Tooltip
                      tipChildren={
                        <p>
                          I offer consulting services for SEO and content
                          strategy. I can help you with your website's ranking,
                          and help you build a better online presence.
                        </p>
                      }
                    >
                      <CustomLink
                        onClick={() =>
                          trackEvent('Now: Mentor Thread', { type: 'link' })
                        }
                        href='/seo-consulting'
                      >
                        Book Now↗
                      </CustomLink>
                    </Tooltip>
                    )
                  </li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                My Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <div className='flex flex-row items-center gap-x-4'>
                <p className='font-bold'>Reach me at:</p>
                <SocialLinks />
              </div>
              <p>
                Feel free to contact me about my projects, current work, or web
                development consultations. I’m happy to help.
              </p>
            </article>
          </div>
        </section>

        <section id='uses'>
          <div className='layout mt-16'>
            <h2>My Desk</h2>
            <CustomImg
              className='mt-8'
              publicId='/images/about/loren-couse-desk.jpg'
              width={1279}
              height={913}
              alt='Photo of my desk setup'
            />
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>MacBook Air (13" M1 2020, 16GB, 1TB)</li>
                <li>Asus 24 Inch Monitor (VZ249HE)</li>
                <li>Logitech G610 Mechanical Keyboard</li>
                <li>Asus MM511 Mouse</li>
                <li>Neat Bumblebee II - Professional Condenser Mic</li>
                <li>Google Nest Speaker</li>
                <li>Kindle Fire Smart Display</li>
                <li>Kindle Paperwhite (10th Generation)</li>
                <li>Nintendo Switch Original</li>
                <li>Apple iPhone 15 Pro Max</li>
                <li>Beats Fit Pro Buds</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
