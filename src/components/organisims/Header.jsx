import React from 'react'
import Nav from '../molecules/Nav'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-primary bg-opacity-70  shadow-2xl">
      <Nav />
    </header>
  )
}
