import React, { useState } from 'react'
import { Flex, Box, Select, Text, Button, Input } from '@chakra-ui/react'
import { majorChords, minorChords } from '../../utils/guitar/chords'

const chordOptions = [...majorChords, minorChords]

const capoOptions = [
  { value: '0', label: 'Open' },
  { value: '1', label: '1st Fret' },
  { value: '2', label: '2nd Fret' },
  { value: '3', label: '3rd Fret' },
  { value: '4', label: '4th Fret' },
  { value: '5', label: '5th Fret' },
  { value: '6', label: '6th Fret' },
  { value: '7', label: '7th Fret' },
  { value: '8', label: '8th Fret' },
  { value: '9', label: '9th Fret' },
  { value: '10', label: '10th Fret' },
]

const ChordTransposer = () => {
  const [currentChord1, setCurrentChord1] = useState(chordOptions[0])
  const [currentChord2, setCurrentChord2] = useState(chordOptions[0])
  const [capoPosition, setCapoPosition] = useState(capoOptions[0])
  const [desiredCapoPosition, setDesiredCapoPosition] = useState(capoOptions[0])
  const [newChord1, setNewChord1] = useState('')
  const [newChord2, setNewChord2] = useState('')

  const handleChordChange = (e, index) => {
    if (index === 1) {
      setCurrentChord1(e?.target?.value?.value)
    } else if (index === 2) {
      setCurrentChord2(e?.target?.value?.value)
    }
  }

  const handleCapoChange = (e) => {
    setCapoPosition(e?.target?.value)
  }

  const handleDesiredCapoChange = (e) => {
    setDesiredCapoPosition(e?.target?.value)
  }

  const transposeChord = (chord, capoDiff) => {
    // TODO: Implement chord transposition logic here
    return chord
  }

  const handleTranspose = () => {
    const capoDiff = desiredCapoPosition - capoPosition
    setNewChord1(transposeChord(currentChord1, capoDiff))
    setNewChord2(transposeChord(currentChord2, capoDiff))
  }

  return (
    <Flex direction="column">
      <Flex alignItems="center" mb={4}>
        <Select
          value={currentChord1}
          onChange={(e) => handleChordChange(e, 1)}
          mr={2}
        >
          {chordOptions?.map((option) => (
            <option key={option?.value} value={option}>
              {option?.label}
            </option>
          ))}
        </Select>
        <Text mr={2}>to</Text>
        <Select
          value={currentChord2}
          onChange={(e) => handleChordChange(e, 2)}
          mr={2}
        >
          {chordOptions?.map((option) => (
            <option key={option?.value} value={option}>
              {option?.label}
            </option>
          ))}
        </Select>
        <Text mr={2}>transposed</Text>
        <Select value={capoPosition} onChange={handleCapoChange} mr={2}>
          {capoOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </Select>
        <Text mr={2}>to</Text>
        <Select
          value={desiredCapoPosition}
          onChange={handleDesiredCapoChange}
          mr={2}
        >
          {capoOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </Select>
        <Button onClick={handleTranspose}>Transpose</Button>
      </Flex>
      <Flex>
        <Box mr={4}>
          <Text mb={2}>{currentChord1?.label} Chord Shapes:</Text>
          {currentChord1?.shapes?.map((shape, index) => (
            <Text key={index}>{shape?.fingerings}</Text>
          ))}
        </Box>
        <Box>
          <Text mb={2}>{currentChord2?.label} Chord Shapes:</Text>
          {currentChord2?.shapes?.map((shape, index) => (
            <Text key={index}>{shape?.fingerings}</Text>
          ))}
        </Box>
      </Flex>
      <Flex mt={4}>
        <Box mr={4}>
          <Text mb={2}>Transposed {currentChord1?.label} Chord Shapes:</Text>
          {/* Display transposed chord shapes here /}
{newChord1 && currentChord1?.shapes?.map((shape, index) => (
<Text key={index}>{transposeChord(shape?.fingerings, desiredCapoPosition - capoPosition)}</Text>
))}
</Box>
<Box>
<Text mb={2}>Transposed {currentChord2?.label} Chord Shapes:</Text>
{/ Display transposed chord shapes here */}
          {newChord2 &&
            currentChord2?.shapes?.map((shape, index) => (
              <Text key={index}>
                {transposeChord(
                  shape?.fingerings,
                  desiredCapoPosition - capoPosition,
                )}
              </Text>
            ))}
        </Box>
      </Flex>
    </Flex>
  )
}

export default ChordTransposer
