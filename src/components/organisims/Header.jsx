import React from 'react';

export default function Header() {
  return (
    <header className='sticky top-0 z-50  p-1 shadow-2xl bg'>
      <nav className='px-4 flex justify-between'>
        <h1 className='font-extrabold italic animate-pulse tracking-widest'>
          Gitarr{' '}
        </h1>{' '}
        <h6 className='font-extrabold italic text-red-400 tracking-widest'>
          COMING SOON!
        </h6>
        <p className='px-2 text-xs md:text-sm font-bold py-1 rounded-md bg-yellow-200'>
          BETA
        </p>
      </nav>
    </header>
  );
}
