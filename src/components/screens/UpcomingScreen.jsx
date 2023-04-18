import React from 'react';
import { Skeleton, Stack, Text } from '@chakra-ui/react';
import Features from 'components/molecules/Features';
// import Transpose from 'components/organisims/transpose/Transpose';
export default function UpcomingScreen() {
  return (
    <section className='p-5 min-h-[50vh]'>
      <Stack p={4} spacing={2}>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
      <Text
        className='text-center font-extrabold tracking-widest italic text-5xl py-10'
        as={'h3'}
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='7xl'
        fontWeight='extrabold'>
        UPCOMING
      </Text>
      {/* <h2 className='text-center text-primary font-extrabold tracking-widest italic text-5xl py-5'>
        UPCOMING
      </h2> */}
      <Features />
      <Stack p={4} spacing={2}>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
      {/* <Transpose /> */}
    </section>
  );
}
