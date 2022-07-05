import { Button, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import About from "../components/about/About";
// import Banner from "../components/home/Banner";
import NextSeo from "next-seo";
import nextSeoConfig from "../next-seo.config";

export default function Home() {
  // const [data, setData] = useState();
  // const getData = async () => {
  //   const response = await fetch("");
  //   const data = await response.json();
  //   console.log(data);
  // };
  useEffect(() => {
    // alert(arrStr)
  }, []);
  return (
    <div className=" min-h-full min-w-full  bg-green-400 txtMain">
      {/* {     <NextSeo
        config={{
          title: "Guitar Acoustical",
          description: "Guitar Acoustical - Alwaz Shahid",
        }}
      /> */}

      <main className="flex md:justify-between justify-center relative scroll-m-16 scroll-smooth items-center md:items-center md:flex-row flex-col min-w-full min-h-screen">
        <div className="md:w-1/3 w-1/2 md:p-3">
          <Image
            alt="Guitar Acoustical"
            src={`/svgs/g (1).svg`}
            className="cursor-pointer anim7  hover:opacity-80 opacity-70 hover:rotate-90 min-h-full mi-w-full object-center"
            height={700}
            width={700}
          />
        </div>
        <Pattern />
        <div className="md:h-72 h-56 w-full bg-opacity-20 f-c-c ">
          <PageTitle />
        </div>
      </main>
      <About />
      {/* <Button onClick={getData}>Get</Button> */}
    </div>
  );
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
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      // y: 0,
      opacity: 1,
    },
  };
  const ta = [
    "G",
    "u",
    "i",
    "t",
    "a",
    "r",
    " A",
    "c",
    "o",
    "u",
    "s",
    "t",
    "i",
    "c",
    "a",
    "l",
  ];
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="headingContainer"
    >
      {ta.map((ch, i) => (
        <motion.span
          className="headingChar  txtMainC"
          key={i + ch}
          variants={item}
        >
          {ch}
        </motion.span>
      ))}
    </motion.h1>
  );
};

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
    <div className="absolute bottom-4 md:bottom-10 left-2 md:left-2">
      <Image
        alt="decor"
        src={`/svgs/g (6).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-7 right-2 md:right-6">
      <Image
        alt="decor"
        src={`/svgs/g (7).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-7 left-42 md:left-14 ml-10">
      <Image
        alt="decor"
        src={`/svgs/g (12).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute top-2 md:top-12 right-2 md:right-16">
      <Image
        alt="decor"
        src={`/svgs/g (3).svg`}
        className="cursor-pointer opacity-70 "
        width={100}
        height={100}
      />
    </div>
    <div className="absolute bottom-24 md:bottom-4 md:mr-7 right-48 md:right-14">
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
);

// const tagline = "G u i t a r A c o u s t i c a l";
// const arrStr = tagline.split(" ");

{
  /* <div className="bg-purple-500 p-20">
{" "}
<motion.ul
  className="bg-purple-500 p-10"
  variants={container}
  initial="hidden"
  animate="visible"
>
  {[0, 1, 2, 3].map((index) => (
    <motion.li
      key={index}
      className="w-10 h-10 bg-black m-2"
      variants={item}
    />
  ))}
</motion.ul>

</div> */
}
