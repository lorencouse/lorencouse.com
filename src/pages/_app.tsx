import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import * as React from 'react';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-tippy/dist/tippy.css';
import '@/styles/globals.css';
import '@/styles/carbon.css';
import '@/styles/mdx.css';
import '@/styles/nprogress.css';

import { getFromLocalStorage } from '@/lib/helper.client';

import ErrorBoundary from '@/components/layout/ErrorBoundary';
import Layout from '@/components/layout/Layout';

import { blockDomainMeta } from '@/constants/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Don't increment views if not on main domain
    if (
      window.location.host !==
        (process.env.NEXT_PUBLIC_BLOCK_DOMAIN_WHITELIST || 'lorencouse.com') &&
      blockDomainMeta
    ) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false');
        // reload page to make changes
        window.location.reload();
      }
    }
  }, []);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ErrorBoundary>
            <AnimatePresence mode='wait'>
              <motion.div
                key={router.asPath}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
