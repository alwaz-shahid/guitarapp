import React from 'react'
import Footer from './Footer'
import Header from './organisims/Header'

export default function Layout({ children }) {
  return (
    <main className="min-h-screen min-w-full  relative">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
