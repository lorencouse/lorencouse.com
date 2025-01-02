import React from 'react';

import SocialLinks from '@/components/links/SocialLinks';

const ContactBlock = () => {
  return (
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
  );
};

export default ContactBlock;
