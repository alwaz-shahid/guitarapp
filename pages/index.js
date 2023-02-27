import { Button, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/about/About'
// import Banner from "../components/home/Banner";
import NextSeo from 'next-seo'
import nextSeoConfig from '../next-seo.config'

import { stringToArray } from '../utils/helpers'
import ChordTransposer from '../components/guitar/ChordTransposer'
import ChordDiagram from '../components/guitar/ChordDiagram'

export default function Home() {
  // const [data, setData] = useState();
  // const getData = async () => {
  //   const response = await fetch("");
  //   const data = await response.json();
  //   console.log(data);
  // };
  useEffect(() => {
    // alert(arrStr)
  }, [])
  const chordObject = {
    shapes: [
      { fingerings: '320003' },
      { fingerings: '3X0003' },
      { fingerings: '355433' },
      { fingerings: 'XX5787' },
    ],
  }

  return (
    <div className="min-h-full min-w-full  relative">
      <p className="absolute z-20 px-4 py-1 rounded-md shadow-lg top-4 left-4 bg-yellow-500 font-bold ">
        Beta
      </p>
      <main className="hero-container bg-primary txtMain">
        <Pattern />
        <section className="md:h-72 h-56 w-full">
          <PageTitle />
          <p className="min-w-full text-2xl font-pac text-center">
            {' '}
            Where Learning the Guitar Feels Like Music to Your Ears
          </p>
        </section>
      </main>

      <About />

      {/* <Button onClick={getData}>Get</Button> */}
      <section
        className="p-5 minhs
      "
      >
        <ChordTransposer />
        <br />
        {/* <ChordDiagram chord={chordObject} /> */}
      </section>
    </div>
  )
}

const PageTitle = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
      className="headingContainer select-none text-center"
    >
      {stringToArray('Guitar Acoustical').map((ch, i) => (
        <motion.span
          className="headingChar  text-green-800"
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
    <div className="absolute top-2 md:top-5 left-4 md:left-2">
      <Image
        alt="decor"
        src={`/svgs/g (4).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute bottom-4 md:bottom-4 left-2 md:left-2">
      <Image
        alt="decor"
        src={`/svgs/g (6).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-5 right-2 md:right-6">
      <Image
        alt="decor"
        src={`/svgs/g (7).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-5 left-42 md:left-14 ml-10">
      <Image
        alt="decor"
        src={`/svgs/g (12).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-5 right-2 md:right-16">
      <Image
        alt="decor"
        src={`/svgs/g (3).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute bottom-4 md:bottom-4 md:mr-7 right-36 rotate-12 md:right-14">
      <Image
        alt="decor"
        src={`/svgs/g (13).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute bottom-4 md:bottom-6 right-2 md:right-8">
      <Image
        alt="decor"
        src={`/svgs/g (10).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
  </>
)
