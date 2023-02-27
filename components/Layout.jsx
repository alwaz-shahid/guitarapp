import React from 'react'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <main className="min-h-full min-w-full  relative">
      {children}
      <Footer />
    </main>
  )
}
