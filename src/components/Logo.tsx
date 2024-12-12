import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/' passHref>
      <Image
        src='/images/logo.png'
        width={35}
        height={35}
        alt='Loren Couse Logo'
        className='hover:cursor-pointer'
      />
    </Link>
  );
};

export default Logo;
