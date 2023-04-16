import Link from 'next/link';
import React from 'react';

export default function Footer() {
  // const pages=['About', 'Contact', 'Privacy', 'Terms', 'Sitemap']

  return (
    <footer className='h-96 min-w-full bg-gray-800 p-5 relative'>
      <p className='text-4xl text-green-600 block py-10  px-3'>
        Guitar Acoustical
      </p>

      <div className='flex justify-between items-center absolute bottom-3'>
        <div className='w-full text-center'>
          <p className='text-gray-500 text-sm '>
            Copyright © {new Date().getFullYear()}{' '}
            <a
              href='https://www.linkedin.com/in/alwaz-shahid'
              className='text-gray-500 hover:text-gray-700'
              target='_blank'
              rel='noreferrer'>
              Alwaz Shahid
            </a>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
