import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tooltip,
} from '@chakra-ui/react';

export default function TransposeTable({ data }) {
  const { chord, capoInitial, capoFinal, transposedChord } = data;

  return (
    transposedChord && (
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Chord Transposition Table</TableCaption>
          <Thead>
            <Tr>
              <Th>Selected Chord</Th>
              <Th>Capo Position</Th>
              <Th>Transposed Chord</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{chord}</Td>
              <Td>
                <Tooltip
                  label={`Capo Initial: ${capoInitial}`}
                  placement='bottom'>
                  <span>Open</span>
                </Tooltip>
                {' → '}
                <Tooltip
                  label={`Capo Final: Fret ${capoFinal}`}
                  placement='bottom'>
                  <span>Fret {capoFinal}</span>
                </Tooltip>
              </Td>
              <Td>{transposedChord.newChords.chord}</Td>
            </Tr>
            <Tr>
              <Td>{transposedChord.oldChords}</Td>
              <Td></Td>
              <Td>{transposedChord.newChords.shape}</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>
                <Tooltip
                  label={`Shape After Capo: ${transposedChord.newChords.shapeAfterCapo}`}
                  placement='top'>
                  <span>{transposedChord.newChords.shapeAfterCapo}</span>
                </Tooltip>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    )
  );
}

// import React from 'react';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react';
// export default function TransposeTable({ data }) {

//   return (
//     <TableContainer>
//       <Table variant='simple'>
//         <TableCaption>Imperial to metric conversion factors</TableCaption>
//         <Thead>
//           <Tr>
//             <Th>To convert</Th>
//             <Th>into</Th>
//             <Th isNumeric>multiply by</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>inches</Td>
//             <Td>millimetres (mm)</Td>
//             <Td isNumeric>25.4</Td>
//           </Tr>
//           <Tr>
//             <Td>feet</Td>
//             <Td>centimetres (cm)</Td>
//             <Td isNumeric>30.48</Td>
//           </Tr>
//           <Tr>
//             <Td>yards</Td>
//             <Td>metres (m)</Td>
//             <Td isNumeric>0.91444</Td>
//           </Tr>
//         </Tbody>
//         <Tfoot>
//           <Tr>
//             <Th>To convert</Th>
//             <Th>into</Th>
//             <Th isNumeric>multiply by</Th>
//           </Tr>
//         </Tfoot>
//       </Table>
//     </TableContainer>
//   );
// }
