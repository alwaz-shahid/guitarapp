import React from 'react';
import { Grid, Text } from '@chakra-ui/react';

function TransposeInstructions() {
  return (
    <Grid templateColumns='repeat(1, 1fr)' gap={6}>
      <Text>To use the guitar chord transpose tool, follow these steps:</Text>
      <Text>1. Select the chord you want to convert.</Text>
      <Text>
        2. Select the capo position. The starting capo position is open by
        default.
      </Text>
      <Text>
        3. Change the capo position by selecting a fret number from 1 to 8.
      </Text>
    </Grid>
  );
}

export default TransposeInstructions;
