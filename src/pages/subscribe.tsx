import * as React from 'react';

import Accent from '@/components/Accent';
import SubscribeCard from '@/components/blog/SubscribeCard';
import Seo from '@/components/Seo';

export default function SubscribePage() {
  return (
    <>
      <Seo
        templateTitle='Subscribe'
        description='Get notified every time there is a new post through your email.'
      />
      <main>
        <section className=''>
          <div className='layout flex flex-col items-center py-20 text-center'>
            <h1>
              Subscribe to <Accent>lorencouse.com</Accent>
            </h1>
            <SubscribeCard className='mt-8 text-left' />
          </div>
        </section>
      </main>
    </>
  );
}
