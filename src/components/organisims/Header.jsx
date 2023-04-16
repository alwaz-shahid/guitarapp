import React from 'react';

export default function Header() {
  return (
    <header className='sticky top-0 z-50  p-1 shadow-2xl'>
      <nav className='px-4 flex justify-between'>
        <h1 className='font-extrabold italic animate-pulse'>Gitarr </h1>{' '}
        <p className='px-2 text-xs md:text-sm font-bold py-1 rounded-md bg-yellow-200'>
          BETA
        </p>
      </nav>
    </header>
  );
}
