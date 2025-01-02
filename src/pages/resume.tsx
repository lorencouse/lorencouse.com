import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import ContactBlock from '@/components/resume/ContactBlock';
import ResumeBlock from '@/components/resume/ResumeBlock';
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
          <ResumeBlock />
        </section>

        <section>
          <ContactBlock />
        </section>
      </main>
    </>
  );
}
