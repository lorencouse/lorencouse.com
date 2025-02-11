import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx.server';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Seo from '@/components/Seo';

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo
        templateTitle='Projects'
        description='Showcase of my personal projects and work experience.'
      />
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout py-12'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              <Accent>Projects</Accent>
            </h1>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              A showcase of my personal projects and experience.
            </p>

            <ul
              data-fade='2'
              className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = (await getAllFilesFrontmatter('projects')).reverse();
  // const projects = sortByDate(files);

  return { props: { projects } };
}
