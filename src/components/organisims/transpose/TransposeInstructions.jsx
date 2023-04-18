import React from 'react';
import { Divider, Grid, Text } from '@chakra-ui/react';

function TransposeInstructions() {
  return (
    <Grid templateColumns='repeat(1, 1fr)' gap={6}>
      <Text fontWeight={'bold'} fontSize={'2xl'}>
        Chord Transposition Tool:
      </Text>
      <Text maxW={'4xl'} fontSize={'xl'}>
        The chord transposition tool is used to change the key of a song without
        having to learn new chord shapes. Transposition involves shifting all
        the chords of a song up or down a certain number of steps, which changes
        the pitch of the song.
      </Text>
      <Text maxW={'4xl'} fontSize={'xl'}>
        This tool can be especially helpful for musicians who need to adjust the
        key of a song to better suit their voice range or to accommodate
        different instruments. It can also be useful for songwriters who want to
        experiment with different keys to find the perfect sound.
      </Text>
      <Text fontWeight={'bold'} fontSize={'xl'}>
        Instructions:
      </Text>
      <Text>To use the chord transposition tool, follow these steps:</Text>
      <Text>1. Select the chord you want to convert.</Text>
      <Text>
        2. Select the capo position. The starting capo position is open by
        default.
      </Text>
      <Text>
        3. Change the capo position by selecting a fret number from 1 to 8.
      </Text>
      <Divider />
      <Text color={'red.400'} fontStyle={'italic'} fontSize={'xs'}>
        Although our current progress may not yield the desired results, we
        appreciate your visit and support. Please note that we are continuously
        working to improve and enhance our services.
      </Text>
    </Grid>
  );
}

export default TransposeInstructions;
