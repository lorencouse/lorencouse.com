import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import SocialLinks from '@/components/links/SocialLinks';
import ExperienceBlock from '@/components/resume/ExperienceBlock';
import Seo from '@/components/Seo';

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
              <SocialLinks />
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
    description:
      'Coursework in IT, cybersecurity, statistics, & data analytics.\nDatabase management systems and IT project management.\nResearch into digital marketing efficacy in e-commerce platforms.',
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
      'Managed research field teams of 3-5 people, effectively executing research projects.\nOversaw field data collection, quality control, and project progress.\nAnalyzed market trends to align research insights with client goals.\nConducted new employee training and monthly performance evaluations.',
    img: '/images/resume/ey-logo.jpg',
  },
  {
    year: '2019-2022',
    location: 'Dakuo Digital Innovation Center',
    locationLink: 'https://dakuo.koda.net.tw/partner.html',
    city: 'Kaohsiung, Taiwan',
    role: 'Startup Advisor',
    description:
      'Provide strategic guidance on business development strategies, market positioning, and current trends.\nSet goals and timelines to meet project targets and investor expectations.\nMentored team building, effective leadership, and scalable team structures.\nFacilitated fundraising network events for investor introductions, government grants, and corporate collaborations.',
    img: '/images/resume/dakuo-logo.jpeg',
  },
];
