import React from 'react'
import Chord from '@tombatossals/react-chords/lib/Chord'
const ChordDiagram = ({ shapes }) => {
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    },
  }
  const lite = false // defaults to false if omitted

  return (
    <>
      {shapes.map((shape, index) => (
        <div key={index}>
          <Chord
            chord={{ frets: shape.fingerings }}
            instrument={instrument}
            lite={lite}
          />
          <p>{shape.position}</p>
        </div>
      ))}
    </>
  )
}

export default ChordDiagram
