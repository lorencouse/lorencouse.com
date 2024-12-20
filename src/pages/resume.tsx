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
          <div className='layout pt-12 '>
            <h1 className='text-3xl md:text-5xl'>
              <Accent>Resumé</Accent>
            </h1>
            <div className=' mt-4'>
              <div className='experience columns-1 md:columns-2 gap-6'>
                <div className='work-history break-inside-avoid'>
                  <h2>
                    <span className='text-primary-300'>Exp</span>erience
                  </h2>
                  <article className='prose dark:prose-invert '>
                    {workHistory.map((work, index) => (
                      <ExperienceBlock key={index} {...work} />
                    ))}
                  </article>
                </div>
                <div className='education-history break-inside-avoid'>
                  <h2>
                    <span className='text-primary-300'>Edu</span>cation
                  </h2>
                  <article className='prose dark:prose-invert '>
                    {educationHistory.map((education, index) => (
                      <ExperienceBlock key={index} {...education} />
                    ))}
                  </article>
                </div>
              </div>

              <h3 className='mt-12'>Tech Stack</h3>
              <figure className='mt-2'>
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
  city: string;
  description: string;
  img: string;
};

const educationHistory: ExperienceProps[] = [
  {
    year: '2016-2018',
    location: 'National Taiwan Cheng Kung University',
    locationLink: 'https://www.ncku.edu.tw/',
    city: 'Tainan, Taiwan',
    role: 'MBA - Information Technology',
    description: 'Line 1\nLine 2\nLine 3',
    img: '/images/resume/ncku-logo.jpeg',
  },
  {
    year: '2010-2014',
    location: 'University of Massachusetts Boston',
    locationLink: 'https://www.umb.edu/',
    city: 'Boston, MA',
    role: 'Bachelor of Arts - Minor in Computer Science',
    description:
      'Major in Japanese with 1 year study in Kyoto, Japan\nCS Coursework in Java, C++, Python, SQL Databases\nWeb Development, HTLM, JS, CSS, and Data Structures',
    img: '/images/resume/umass-boston.png',
  },
];

const workHistory: ExperienceProps[] = [
  {
    year: '2011-Present',
    location: 'MaleQ.com Adult Store',
    locationLink: '/projects/maleq/',
    city: 'Remote',
    role: 'Founder & CEO',
    description:
      'Drove revenue growth: Built and managed an e-commerce business generating over $850K in sales.\nManaged global team: Led a diverse team of writers and employees across 5 countries, expanding user base to Chinese and Spanish speaking markets.\nOptimized content strategy: Directed SEO-focused content creation, increasing website traffic and organic sales.',
    img: '/images/resume/mq-logo-2.png',
  },
  {
    year: '2022-2023',
    location: 'Ernst & Young',
    locationLink: 'https://www.ey.com/',
    role: 'Market Research Coordinator',
    city: 'Melbourne, Australia',
    description:
      'Conducted research: Analyzed market trends, competitor activities, and industry benchmarks to provide actionable insights for client strategies.\nPrepared reports: Compiled comprehensive presentations and reports highlighting key findings, market opportunities, and strategic recommendations.\nCollaborated with teams: Partnered with cross-functional teams to align research insights with client goals, ensuring data-driven decision-making.',
    img: '/images/resume/ey-logo.jpg',
  },
  {
    year: '2019-2022',
    location: 'Dakuo Digital Innovation Center',
    locationLink: 'https://dakuo.koda.net.tw/partner.html',
    city: 'Kaohsiung, Taiwan',
    role: 'Startup Advisor',
    description:
      'Provide strategic guidance on product development strategies, market positioning, and technology trends.\nSet goals and timelines based project targets to meet project and market demands.\nMentorship and Team Building, fostering a culture of innovation, effective leadership, and scalable team structures.\nFundraising and Networking Support to facilitate investor introductions, government grants, and strategic collaborations.',
    img: '/images/resume/dakuo-logo.jpeg',
  },
];
