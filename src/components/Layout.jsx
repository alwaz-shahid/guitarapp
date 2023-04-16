import React from 'react';
import Header from './organisims/Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <main className='min-h-screen  min-w-full relative'>
      <Header />

      {children}
      <Footer />
    </main>
  );
}
