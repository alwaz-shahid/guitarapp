import Link from 'next/link'
import React from 'react'

export default function Footer() {
  // const pages=['About', 'Contact', 'Privacy', 'Terms', 'Sitemap']
  const pages = [
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
    {
      title: 'Privacy',
      url: '/privacy',
    },
    {
      title: 'Terms',
      url: '/terms',
    },
    {
      title: 'Sitemap',
      url: '/sitemap',
    },
  ]
  const apps = [
    {
      title: 'Music',
      url: '/apps/music',
    },
    {
      title: 'Transpose',
      url: '/apps/music',
    },
    {
      title: 'Chords',
      url: '/apps/chords',
    },
  ]

  return (
    <footer className="h-96 min-w-full bg-gray-800 p-5 relative">
      <p className="text-4xl text-green-600 block py-10  px-3">
        Guitar Acoustical
      </p>
      <section className="flex justify-start items-start w-full flex-1">
        <div className="flex flex-col text-lg text-green-500">
          <div className="">
            <h1 className="">Pages</h1>
            {pages.map((page, i) => {
              return (
                <Link className="text-xs underline" href={page.url} key={i}>
                  <a className="text-green-300 block p-2 text-sm ml-1 hover:text-gray-700">
                    {page.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col text-lg text-red-500">
          <div className="">
            <h1 className="block">Pages</h1>
            {pages.map((page, i) => {
              return (
                <Link className="text-xs underline" href={page.url} key={i}>
                  <a className="text-red-300 block p-2 text-sm ml-1 hover:text-gray-700">
                    {page.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col text-lg text-green-500">
          <div className="">
            <h1 className="block">Apps</h1>
            {apps.map((page, i) => {
              return (
                <Link className="text-xs underline" href={page.url} key={i}>
                  <a className="text-green-300 block p-2 text-sm ml-1 hover:text-gray-700">
                    {page.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <div className="flex justify-between items-center absolute bottom-3">
        <div className="w-full text-center">
          <p className="text-gray-500 text-sm ">
            Copyright © {new Date().getFullYear()}{' '}
            <a
              href="https://www.linkedin.com/in/alwaz-shahid"
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
            >
              Alwaz Shahid
            </a>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
