import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'lotties/guitar-exercise.json';
import Features from 'components/molecules/Features';
import { Box, Text } from '@chakra-ui/react';
export default function WelcomeScreen() {
  const defaultOptions = {
    // loop: true,
    // autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className='min-h-[80vh] p-5 w-full flex flex-col lg:flex-row justify-between bggg'>
      <div className='min-w-[60%] flex items-start justify-center flex-col space-y-5 p-5'>
        <Text
          as={'h1'}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='7xl'
          fontWeight='extrabold'>
          Welcome to Gitarr
        </Text>
        {/* <h1 className='text-7xl'></h1> */}
        <h2 className='text-3xl p-1  lg:max-w-lg '>
          Empowering Your Guitar Journey with Innovative Tools.
        </h2>
        <p className=' p-1 lg:text-lg  lg:max-w-lg'>
          We&apos;re excited to help you on your guitar journey. With our
          upcoming tools, we&apos;re confident that we can take your playing to
          the next level.{' '}
        </p>
        <Box
          href='#tools'
          as='a'
          p={4}
          color='white'
          fontWeight='bold'
          borderRadius='md'
          bgGradient='linear(to-r, purple.400, pink.300)'
          // _hover={{
          //   bgGradient: 'linear(to-r, red.500, yellow.500)',
          // }}
        >
          Try out Transpose Tool
        </Box>
      </div>
      <div className='lg:p-2 '>
        <Lottie options={defaultOptions} height={500} width={400} />
      </div>
      <div className=''></div>
    </section>
  );
}
