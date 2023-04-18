import { Box } from '@chakra-ui/react';
import Transpose from 'components/organisims/transpose/Transpose';
import React from 'react';

export default function DemoScreen() {
  return (
    <section id='tools' className='p-5 min-h-[50vh]'>
      <h1 className='text-3xl font-bold'>Tools - Demo</h1>'
      <Transpose />
    </section>
  );
}
