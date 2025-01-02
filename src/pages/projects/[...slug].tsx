import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import * as React from 'react';
import { HiLink, HiOutlineEye, HiPlay, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import { getFileBySlug, getFileSlugArray } from '@/lib/mdx.server';
import useContentMeta from '@/hooks/useContentMeta';
import useScrollSpy from '@/hooks/useScrollspy';

import Comment from '@/components/content/Comment';
import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import CustomImg from '@/components/images/CustomImg';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechIcons from '@/components/TechIcons';
import { TechListType } from '@/components/TechIcons';

import { ProjectType } from '@/types/frontmatters';

export default function SingleProjectPage({ code, frontmatter }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Content Meta ===========
  const contentSlug = `p_${frontmatter.slug.replace('|', '-')}`;
  const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========

  return (
    <>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
      />

      <main>
        <section className=''>
          <div className='layout'>
            <CustomImg
              publicId={`${frontmatter.banner}`}
              alt={frontmatter.title}
              width={1280}
              height={720}
            />

            <h1 className='mt-4'>{frontmatter.title}</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
              {frontmatter.description}
            </p>

            <div className='mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300'>
              <div className='flex items-center gap-1'>
                <HiOutlineEye className='inline-block text-base' />
                {meta?.views?.toLocaleString() ?? '122'} views
              </div>
              {(frontmatter.github ||
                frontmatter.youtube ||
                frontmatter.link) &&
                ' - '}
              {frontmatter.github && (
                <div className='inline-flex items-center gap-2'>
                  <SiGithub className='text-lg text-gray-800 dark:text-white' />
                  <CustomLink
                    onClick={() =>
                      trackEvent(`Project Github: ${frontmatter.title}`, {
                        type: 'link',
                      })
                    }
                    href={frontmatter.github}
                    className='mt-1'
                  >
                    Repository
                  </CustomLink>
                </div>
              )}
              {frontmatter.github &&
                (frontmatter.youtube || frontmatter.link) &&
                ' - '}
              {frontmatter.youtube && (
                <div className='inline-flex items-center gap-2'>
                  <HiPlay className='text-xl text-gray-800 dark:text-white' />
                  <CustomLink
                    href={frontmatter.youtube}
                    className='mt-1'
                    onClick={() =>
                      trackEvent(`Project Video: ${frontmatter.title}`, {
                        type: 'link',
                      })
                    }
                  >
                    Demo Video
                  </CustomLink>
                </div>
              )}
              {frontmatter.youtube && frontmatter.link && ' - '}
              {frontmatter.link && (
                <div className='inline-flex items-center gap-2'>
                  <HiLink className='text-lg text-gray-800 dark:text-white' />
                  <CustomLink
                    href={frontmatter.link}
                    className='mt-1'
                    onClick={() =>
                      trackEvent(`Project Live: ${frontmatter.title}`, {
                        type: 'link',
                      })
                    }
                  >
                    Open Live Site
                  </CustomLink>
                </div>
              )}
            </div>
            <div className='flex items-center align-middle gap-10 mt-3'>
              {frontmatter.category && (
                <p className='flex items-center justify-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                  <HiUser className='text-lg text-gray-800 dark:text-white' />{' '}
                  {frontmatter.category}
                </p>
              )}

              <TechIcons
                techs={frontmatter.techs.split(',') as Array<TechListType>}
              />
            </div>

            <hr className='mt-4 dark:border-gray-600' />

            <section className='lg:grid lg:grid-cols-[auto,250px] lg:gap-8'>
              <article className='mdx projects prose mx-auto w-full transition-colors dark:prose-invert'>
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>

              <aside className='py-4'>
                <div className='sticky top-36'>
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                </div>
              </aside>
            </section>

            <figure className='mt-12'>
              <Comment />
            </figure>

            <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
              <CustomLink
                href={`https://github.com/lorencouse/${frontmatter.slug}`}
              >
                View this project on GitHub
              </CustomLink>
              <CustomLink href='/projects'>← Back to projects</CustomLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFileSlugArray('projects');

  return {
    paths: posts.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string[];
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const post = await getFileBySlug('projects', slug.join('/'));

  return {
    props: { ...post },
  };
};
