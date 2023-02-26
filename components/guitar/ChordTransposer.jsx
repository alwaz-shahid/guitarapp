import React, { useState } from 'react'
import { Flex, Box, Select, Text, Button, Input } from '@chakra-ui/react'
import { chords, majorChords } from '../../utils/guitar/chords'

const chordOptions = majorChords
const ChordSelect = () => {
  const [selectedChords, setSelectedChords] = useState([])

  const [capoPosition, setCapoPosition] = useState(0)

  const handleChange = (event) => {
    const value = event.target.value
    const chords = [...selectedChords]

    // Remove chord if already selected
    if (chords.includes(value)) {
      setSelectedChords(chords.filter((chord) => chord !== value))
      return
    }

    // Add chord if not already selected
    setSelectedChords([...chords, value])
  }

  const handleCapoChange = (event) => {
    const value = event.target.value
    setCapoPosition(parseInt(value))
  }

  const transposeChords = () => {
    const transposedChords = selectedChords.map((selectedChord) => {
      const chord = chordOptions.find(
        (option) => option.value === selectedChord,
      )

      // Transpose each chord shape to the selected capo position
      const transposedShapes = chord.shapes.map((shape) => {
        const frets = shape.fingerings
          .split('')
          .map((fret) => {
            if (fret === 'X') return 'X'
            return parseInt(fret) + capoPosition
          })
          .join('')

        return { ...shape, fingerings: frets }
      })

      return { ...chord, shapes: transposedShapes }
    })

    setSelectedChords(transposedChords)
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box mb={4}>
        <Text>Select chords:</Text>
        <Select
          placeholder="Select chord"
          onChange={handleChange}
          value=""
          maxWidth={300}
        >
          {chordOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Box>

      <Box mb={4}>
        <Text>Select capo position:</Text>
        <Input type="number" onChange={handleCapoChange} value={capoPosition} />
      </Box>

      <Button onClick={transposeChords}>Transpose chords</Button>

      <Box mt={4}>
        {selectedChords.map((chord) => (
          <Box key={chord} mb={4}>
            <Text>{chord}</Text>
            {chordOptions
              .find((option) => option.value === chord)
              .shapes.map((shape) => (
                <Box key={shape.position} mt={2}>
                  <Text>{shape.position}</Text>
                  <Text>{shape.fingerings}</Text>
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
