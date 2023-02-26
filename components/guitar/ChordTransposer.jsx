import React, { useState } from 'react'
import { Flex, Box, Select, Text, Button, Input } from '@chakra-ui/react'

const chordOptions = [
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
  { value: 'G', label: 'G' },
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
]

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
      setCurrentChord1(e.target.value)
    } else if (index === 2) {
      setCurrentChord2(e.target.value)
    }
  }

  const handleCapoChange = (e, isDesired) => {
    if (isDesired) {
      setDesiredCapoPosition(e.target.value)
    } else {
      setCapoPosition(e.target.value)
    }
  }

  const handleTranspose = () => {
    const currentChords = [currentChord1.value, currentChord2.value]
    const currentCapoPosition = parseInt(capoPosition.value)
    const desiredCapoPositionValue = parseInt(desiredCapoPosition.value)
    const transposeValue = desiredCapoPositionValue - currentCapoPosition

    const newChords = currentChords.map((chord) => {
      const index =
        (chordOptions.findIndex((option) => option.value === chord) +
          transposeValue) %
        chordOptions.length
      return chordOptions[(index + chordOptions.length) % chordOptions.length]
        .value
    })

    setNewChord1(newChords[0])
    setNewChord2(newChords[1])
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={10}
    >
      <Box marginBottom={4}>
        <Text>Select your current chords:</Text>
        <Flex>
          <Select
            value={currentChord1}
            onChange={(e) => handleChordChange(e, 1)}
          >
            {chordOptions.map((option) => (
              <option key={option.value} value={option}>
                {option.label}
              </option>
            ))}
          </Select>
          <Select
            value={currentChord2}
            onChange={(e) => handleChordChange(e, 2)}
          >
            {chordOptions.map((option) => (
              <option key={option.value} value={option}>
                {option.label}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>

      <Box marginBottom={4}>
        <Text>Select your capo position:</Text>
        <Select
          value={capoPosition}
          onChange={(e) => handleCapoChange(e, false)}
        >
          {capoOptions.map((option) => (
            <option key={option.value} value={option}>
              {option.label}
            </option>
          ))}
        </Select>
      </Box>

      <Box marginBottom={4}>
        <Text>Select your desired capo position:</Text>
        <Input
          type="number"
          value={desiredCapoPosition.value}
          onChange={(e) => handleCapoChange(e, true)}
        />
      </Box>

      <Box marginBottom={4}>
        <Button onClick={handleTranspose}>Transpose</Button>
      </Box>

      <Box>
        <Text>New Chords:</Text>
        <Text fontSize="xl">
          {newChord1} - {newChord2}
        </Text>
      </Box>
    </Flex>
  )
}

export default ChordTransposer
