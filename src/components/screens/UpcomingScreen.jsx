import React from 'react';
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';
import Features from 'components/molecules/Features';
import Transpose from 'components/organisims/Transpose';
export default function UpcomingScreen() {
  return (
    <section className='p-5 min-h-[50vh]'>
      <Stack p={4} spacing={2}>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
      <h2 className='text-center text-primary font-extrabold italic text-5xl'>
        UPCOMING
      </h2>
      <Features />
      <Stack p={4} spacing={2}>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
      <Transpose />
    </section>
  );
}
