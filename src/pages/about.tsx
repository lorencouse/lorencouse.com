import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CustomImg from '@/components/images/CustomImg';
import CustomLink from '@/components/links/CustomLink';
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
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Lorén Couse</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CustomImg
                className='float-right ml-6 w-40 md:w-72 rounded-full'
                publicId='/images/Loren-Couse-Web-Developer-tan.png'
                width='1500'
                height='1500'
                alt='Photo of me looking really professional and can definitely impress your boss'
                preview={false}
                title=' '
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Loren. I started learning web development in
                  September 2021, which is the start of the pandemic. I had
                  nothing much to do so I decided to learn web development from
                  a udemy course, then started watching a bunch of{' '}
                  <CustomLink href='/blog/youtube-list'>
                    youtube videos
                  </CustomLink>{' '}
                  to explore more about web development especially frontend
                  development.
                </p>
                <p data-fade='4'>
                  There are a lot of things and technologies to learn in
                  frontend development and I am motivated to learn as much as
                  possible. I enjoy learning something new and getting feedback
                  to make myself better and improve.
                </p>
                <p data-fade='5'>
                  In this website I will be writing some blogs and showcase my
                  projects. I believe that writing what I have learned is the
                  best way to remember things, and I can share my knowledge
                  along the way. So do contact me and I will be very happy to
                  help!
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
                    I'm a mentor! I do revision-style mentorship (
                    <Tooltip
                      tipChildren={
                        <p className='italic'>
                          *Try translating them to english
                        </p>
                      }
                    >
                      <CustomLink
                        onClick={() =>
                          trackEvent('Now: Mentor Thread', { type: 'link' })
                        }
                        href='https://x.com/th_clarence/status/1713454750090534948?s=20'
                      >
                        thread
                      </CustomLink>
                    </Tooltip>
                    )
                  </li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                Tech Stack
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
                <li>Google Nest Speaker</li>
                <li>Kindle Fire Smart Display</li>
                <li>Neat Bumblebee II - Professional Condenser Mic</li>
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
