const chordOptions = [
  {
    label: 'A Major',
    value: 'A',
    shapes: [
      { fingerings: 'X02220', position: '1st Fret' },
      { fingerings: '577655', position: '5th Fret' },
      { fingerings: 'X02255', position: '5th Fret' },
    ],
  },
  {
    label: 'B Major',
    value: 'B',
    shapes: [
      { fingerings: 'X24442', position: '2nd Fret' },
      { fingerings: '799877', position: '7th Fret' },
      { fingerings: 'X24455', position: '7th Fret' },
    ],
  },
]

const transposeChords = (chords, steps) => {
  const chordMap = new Map()
  chordOptions.forEach((option) => {
    chordMap.set(option.value, option)
  })

  const transposedChords = chords.map((chord) => {
    const option = chordMap.get(chord)
    const transposedShapes = option.shapes.map((shape) => {
      const transposedFingerings = shape.fingerings
        .split('')
        .map((fret) => {
          if (fret === 'X') {
            return fret
          }
          const transposedFret = parseInt(fret, 10) + steps
          return transposedFret > 0 ? transposedFret : 'X'
        })
        .join('')
      return { ...shape, fingerings: transposedFingerings }
    })
    return { ...option, shapes: transposedShapes }
  })

  return transposedChords
}

// example usage
const chordsToTranspose = ['A', 'B']
const stepsToTranspose = 2

const transposedChords = transposeChords(chordsToTranspose, stepsToTranspose)
console.log(transposedChords)
