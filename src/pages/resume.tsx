import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CustomImg from '@/components/images/CustomImg';
import ExperienceBlock from '@/components/resume/ExperienceBlock';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo
        templateTitle='Resume'
        description='Lorén is a front-end developer that started learning in September 2021. He writes blogs about his approach and mental models on understanding topics in front-end development.'
      />
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h1 className='mt-1' data-fade='0'>
              <Accent>Lorén Couse</Accent>
            </h1>
            <div className=' mt-4' data-fade='1'>
              <div className='experience columns-1 md:columns-2 gap-6'>
                <div className='work-history break-inside-avoid'>
                  <h2 data-fade='2'>
                    <span className='text-primary-300'>Exp</span>erience
                  </h2>
                  <article
                    className='prose dark:prose-invert my-4'
                    data-fade='3'
                  >
                    {workHistory.map((work, index) => (
                      <ExperienceBlock key={index} {...work} />
                    ))}
                  </article>
                </div>
                <div className='education-history break-inside-avoid'>
                  <h2 data-fade='2'>
                    <span className='text-primary-300'>Edu</span>cation
                  </h2>
                  <article
                    className='prose dark:prose-invert my-4'
                    data-fade='3'
                  >
                    {educationHistory.map((education, index) => (
                      <ExperienceBlock key={index} {...education} />
                    ))}
                  </article>
                </div>
              </div>

              <h3 className='mt-12' data-fade='4'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='5'>
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

type ExperienceProps = {
  year: string;
  location: string;
  locationLink: string;
  role: string;
  description: string;
};

const educationHistory: ExperienceProps[] = [
  {
    year: '2010-2013',
    location: 'University of Massachusetts Boston',
    locationLink: 'https://www.umb.edu/',
    role: 'Bachelor of Arts - Minor in Computer Science',
    description: 'test',
  },
  {
    year: '2016-2018',
    location: 'National Taiwan Cheng Kung University',
    locationLink: 'https://www.ncku.edu.tw/',
    role: 'Master of Business Administration - Information Technology',
    description: 'test',
  },
];

const workHistory: ExperienceProps[] = [
  {
    year: '2011-Present',
    location: 'MaleQ LLC',
    locationLink: 'https://www.maleq.org/',
    role: 'Founder and Lead Developer',
    description: 'test',
  },
];
