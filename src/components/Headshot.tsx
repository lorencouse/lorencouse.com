import React from 'react';

import CustomImg from './images/CustomImg';

const Headshot = () => {
  return (
    <CustomImg
      className='w-40 sm:w-96 rounded-full'
      publicId='/images/Loren-Couse-Web-Developer-tan.png'
      width='1500'
      height='1500'
      alt='Photo of me looking really professional and can definitely impress your boss'
      preview={false}
      title=' '
    />
  );
};

export default Headshot;
