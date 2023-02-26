import React, { useState } from 'react'
import { Flex, Box, Select, Text, Button, Input } from '@chakra-ui/react'

const chordOptions = [
  {
    label: 'A',
    value: 'A',
    shapes: [
      { fingerings: 'X02220', position: '1st Fret' },
      { fingerings: '577655', position: '5th Fret' },
      { fingerings: 'X02255', position: '5th Fret' },
    ],
  },
  {
    label: 'B',
    value: 'B',
    shapes: [
      { fingerings: 'X24442', position: '2nd Fret' },
      { fingerings: '799877', position: '7th Fret' },
      { fingerings: 'X24455', position: '7th Fret' },
    ],
  },
  {
    label: 'C',
    value: 'C',
    shapes: [
      { fingerings: 'X32010', position: '3rd Fret' },
      { fingerings: '8 10 10 9 8 8', position: '8th Fret' },
      { fingerings: 'X32013', position: '8th Fret' },
    ],
  },
  {
    label: 'D',
    value: 'D',
    shapes: [
      { fingerings: 'XX0232', position: '2nd Fret' },
      { fingerings: 'X57775', position: '5th Fret' },
      { fingerings: 'XX0235', position: '5th Fret' },
    ],
  },
  {
    label: 'E',
    value: 'E',
    shapes: [
      { fingerings: '022100', position: '1st Fret' },
      { fingerings: '779997', position: '7th Fret' },
      { fingerings: '022155', position: '7th Fret' },
    ],
  },
  {
    label: 'F',
    value: 'F',
    shapes: [
      { fingerings: '133211', position: '1st Fret' },
      { fingerings: '8 10 10 10 8 8', position: '8th Fret' },
      { fingerings: 'X33211', position: '8th Fret' },
    ],
  },
  {
    label: 'G',
    value: 'G',
    shapes: [
      { fingerings: '320003', position: '3rd Fret' },
      { fingerings: '10 12 12 11 10 10', position: '10th Fret' },
      { fingerings: '320033', position: '10th Fret' },
    ],
  },
  {
    label: 'A',
    value: 'A',
    shapes: [
      { fingerings: 'X02220', position: '1st Fret' },
      { fingerings: '577655', position: '5th Fret' },
      { fingerings: 'X02255', position: '5th Fret' },
    ],
  },
  {
    label: 'A#m',
    value: 'A#m',
    shapes: [
      { fingerings: 'X13321', position: '1st Fret' },
      { fingerings: '688666', position: '6th Fret' },
      { fingerings: 'X13331', position: '6th Fret' },
    ],
  },
  {
    label: 'Bbm',
    value: 'Bbm',
    shapes: [
      { fingerings: 'X13321', position: '1st Fret' },
      { fingerings: '688666', position: '6th Fret' },
      { fingerings: 'X13331', position: '6th Fret' },
    ],
  },
  {
    label: 'Bm',
    value: 'Bm',
    shapes: [
      { fingerings: 'X24432', position: '2nd Fret' },
      { fingerings: '799777', position: '7th Fret' },
      { fingerings: 'X24422', position: '7th Fret' },
    ],
  },
  {
    label: 'Cm',
    value: 'Cm',
    shapes: [
      { fingerings: 'X35543', position: '3rd Fret' },
      { fingerings: '810988', position: '8th Fret' },
      { fingerings: 'X35553', position: '8th Fret' },
    ],
  },
  {
    label: 'C#m',
    value: 'C#m',
    shapes: [
      { fingerings: 'X46654', position: '4th Fret' },
      { fingerings: '911899', position: '9th Fret' },
      { fingerings: 'X46664', position: '9th Fret' },
    ],
  },
  {
    label: 'Dm',
    value: 'Dm',
    shapes: [
      { fingerings: 'XX0231', position: '1st Fret' },
      { fingerings: 'X57765', position: '5th Fret' },
      { fingerings: 'XX0236', position: '5th Fret' },
    ],
  },
  {
    label: 'D#m',
    value: 'D#m',
    shapes: [
      { fingerings: 'X68876', position: '6th Fret' },
      { fingerings: 'X68886', position: '11th Fret' },
      { fingerings: 'X11321', position: '11th Fret' },
    ],
  },
  {
    label: 'Em',
    value: 'Em',
    shapes: [
      { fingerings: '022000', position: 'Open' },
      { fingerings: 'X79987', position: '7th Fret' },
      { fingerings: '022003', position: '7th Fret' },
    ],
  },
  {
    label: 'Fm',
    value: 'Fm',
    shapes: [
      { fingerings: '133111', position: '1st Fret' },
      { fingerings: 'X86454', position: '8th Fret' },
      { fingerings: 'X13321', position: '8th Fret' },
    ],
  },
  {
    label: 'F#m',
    value: 'F#m',
    shapes: [
      { fingerings: '244222', position: '2nd Fret' },
      { fingerings: '9X9987', position: '9th Fret' },
      { fingerings: '244225', position: '9th Fret' },
    ],
  },
  {
    label: 'Gm',
    value: 'Gm',
    shapes: [
      { fingerings: '355333', position: '3rd Fret' },
      { fingerings: 'X10131', position: '10th Fret' },
      { fingerings: 'XX5333', position: '10th Fret' },
    ],
  },
  {
    label: 'G#m',
    value: 'G#m',
    shapes: [
      { fingerings: '466444', position: '4th Fret' },
      { fingerings: 'X11134', position: '4th Fret' },
      { fingerings: '466454', position: '9th Fret' },
    ],
  },
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
