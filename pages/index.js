import { Button, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/about/About'

import { stringToArray } from '../utils/helpers'

import Layout from '../components/Layout'

export default function Home() {
  useEffect(() => {
    // alert(arrStr)
  }, [])

  return (
    <Layout>
      <Head>
        <title>Guitar Acoustical</title>
      </Head>
      <main className="hero-container bg-primary txtMain relative">
        <p className="absolute z-10 px-4 py-1 rounded-md shadow-lg bottom-12 right-4 bg-yellow-500 font-bold ">
          Beta
        </p>
        <Pattern />
        <section className="md:h-56 h-16 w-full grid grid-cols-7">
          <div className="md:col-span-4 col-span-7 col-start-1 md:col-start-4">
            <PageTitle />
            <p className="min-w-full text-sm md:text-2xl font-serif text-center">
              {' '}
              Where Learning the Guitar Feels Like Music to Your Ears!
            </p>
          </div>
        </section>
      </main>
      <About />
      <section className="p-5 min-h-screen bg-green-300">
        <div className="flex flex-wrap justify-start items-start p-5">
          {/* <MyChord /> */}
        </div>
      </section>
    </Layout>
  )
}

const PageTitle = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
        // delayChildren: 0.3,
        // staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      // y: 0,
      opacity: 1,
    },
  }
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="headingContainer select-none"
    >
      {stringToArray('Guitar Acoustical').map((ch, i) => (
        <motion.span
          className={`headingChar ${
            i % 2 == 0 && ![10, 6, 4].includes(i) ? 'text-green-600' : ''
          }`}
          // className="headingChar  txtMainC"
          key={i + ch}
          variants={item}
        >
          {ch}
        </motion.span>
      ))}
    </motion.h1>
  )
}

const Pattern = () => (
  <>
    {/* <div className="absolute top-2 md:top-5 left-4 md:left-2">
      <Image
        alt="decor"
        src={`/svgs/g (4).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    <div className="absolute top-0 md:">
      <Image
        alt="decor"
        src={`/svgs/g (6).svg`}
        className="cursor-pointer opacity-70 border-4 select-none border-red-500"
        width={600}
        height={600}
      />
    </div>
    {/* <div className="absolute bottom-4 md:bottom-4 left-2 md:left-2">
      <Image
        alt="decor"
        src={`/svgs/g (6).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    {/* <div className="absolute top-2 md:top-5 right-2 md:right-6">
      <Image
        alt="decor"
        src={`/svgs/g (7).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    {/* <div className="absolute top-2 md:top-5 left-42 md:left-14 ml-10">
      <Image
        alt="decor"
        src={`/svgs/g (12).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    {/* <div className="absolute top-2 md:top-5 right-2 md:right-16">
      <Image
        alt="decor"
        src={`/svgs/g (3).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    {/* <div className="absolute bottom-4 md:bottom-4 md:mr-7 right-36 rotate-12 md:right-14">
      <Image
        alt="decor"
        src={`/svgs/g (13).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
    {/* <div className="absolute bottom-4 md:bottom-6 right-2 md:right-8">
      <Image
        alt="decor"
        src={`/svgs/g (10).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div> */}
  </>
)
