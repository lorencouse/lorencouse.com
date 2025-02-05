import React from 'react';

import Accent from '@/components/Accent';
import CustomLink from '@/components/links/CustomLink';
import ExperienceBlock from '@/components/resume/ExperienceBlock';

const ResumeBlock = () => {
  return (
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

              <CustomLink
                href='https://drive.google.com/file/d/1QRjCgSfOvuGfBCevUS8mBYBxfodLZYOG/view?usp=sharing'
                className='mt-4'
              >
                Download Resume PDF
              </CustomLink>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      'Relevant Coursework: IT project management, cybersecurity, data analytics.\nThesis Research: Eﬃcacy of digital marketing methods in e-commerce.\nMandarin Chinese (Business Level).',
    img: '/images/resume/ncku-logo.jpeg',
  },
  {
    year: '2010-2014',
    location: 'University of Massachusetts Boston',
    locationLink: 'https://www.umb.edu/',
    city: 'Boston, MA',
    role: 'Bachelor of Arts - Minor in Computer Science',
    description:
      'Relevant Coursework: Java, Python, SQL, Data Structures.\nWeb Development, HTML, JavaScript, CSS, React, Node.js.\nJapanese Language (Proficient).',
    img: '/images/resume/umass-boston.png',
  },
];

const workHistory: ExperienceProps[] = [
  {
    year: '2011-2024',
    location: 'MaleQ',
    locationLink: '/projects/maleq/',
    city: 'Remote',
    role: 'Founder & SEO Growth Engineer Lead',
    description:
      'Established, scaled, and sold a WordPress e-commerce business which surpassed $1 million in sales through data-driven SEM and SEO growth strategies.\nIncreased organic traffic and sales by 10x by optimizing competitive keywords using Google Search Console, SEMrush, and Ahrefs.\nLed a diverse team across 5 countries, expanding to global markets, resulting in a further 2x increase in site traffic.\nImplemented Python process automation which sped up search engine optimized content creation by 8x utilizing artificial intelligence LLM APIs.',
    img: '/images/resume/mq-logo-2.png',
  },
  {
    year: '2022-2023',
    location: 'Ernst & Young',
    locationLink: 'https://www.ey.com/',
    role: 'Market Research Coordinator',
    city: 'Melbourne, Australia',
    description:
      'Managed end-to-end market research projects for Fortune 500 clients in the retail and technology, delivering insights that informed multi-million dollar marketing strategies.\nDeveloped and implemented data collection protocols, reducing errors by 5% and improving data accuracy for client reports.\nTrained and mentored teams of 5–7 personnel, improving onboarding efficiency and team performance by 20%.',
    img: '/images/resume/ey-logo.jpg',
  },
  {
    year: '2019-2022',
    location: 'Dakuo Digital Innovation Center',
    locationLink: 'https://dakuo.koda.net.tw/partner.html',
    city: 'Kaohsiung, Taiwan',
    role: 'Startup Advisor',
    description:
      'Advised startups on growth marketing strategies, including SEO, product marketing and A/B testing, resulting in 25% monthly increases in customer acquisition.\nMentored founders on implementing scalable team structures and effective leadership practices.\nEstablished strategic timelines moving from concept to revenue generation within 1 year, ensuring alignment with investor expectations.',
    img: '/images/resume/dakuo-logo.jpeg',
  },
];

export default ResumeBlock;
