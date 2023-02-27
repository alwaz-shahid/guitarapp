import React from 'react'
import ActiveLink from '../atoms/ActiveLink'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Transpose', href: '/apps/chords' },
]

export default function Nav() {
  return (
    <nav className="flex h-10 p-2 items-center">
      {links?.map((link, i) => (
        <ActiveLink key={i} href={link.href}>
          {link.label}
        </ActiveLink>
      ))}
    </nav>
  )
}
