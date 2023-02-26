import React from 'react'

const CHORD_WIDTH = 50
const CHORD_HEIGHT = 80
const STRING_HEIGHT = 10
const FINGER_RADIUS = 12
const FINGER_COLOR = '#333333'
const STRING_COLOR = '#777777'
const FRET_COLOR = '#777777'
const FRET_TEXT_COLOR = '#555555'

const ChordDiagram = ({ chord }) => {
  const positions = chord.shapes.map((shape) => {
    return shape.fingerings.split('').map((fret) => {
      return fret === 'X' ? null : parseInt(fret)
    })
  })

  const maxFret = Math.max(...positions.flat())

  const strings = [
    {
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.1,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.1,
    },
    {
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.3,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.3,
    },
    {
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.5,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.5,
    },
    {
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.7,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.7,
    },
    {
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.9,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.9,
    },
  ]

  const frets = []

  for (let i = 1; i <= maxFret; i++) {
    frets.push({
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * i,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * i,
    })
    frets.push({
      x1: CHORD_WIDTH * 0.1 + (CHORD_WIDTH * 0.8) / (chord.shapes.length - 1),
      y1: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * (i - 0.5),
      x2: CHORD_WIDTH * 0.9 - (CHORD_WIDTH * 0.8) / (chord.shapes.length - 1),
      y2: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * (i - 0.5),
    })
    frets.push({
      x1: CHORD_WIDTH * 0.1,
      y1: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * i,
      x2: CHORD_WIDTH * 0.1,
      y2: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * (i - 0.5),
    })
    frets.push({
      x1: CHORD_WIDTH * 0.9,
      y1: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * i,
      x2: CHORD_WIDTH * 0.9,
      y2: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * (i - 0.5),
    })
  }

  const fingers = []

  positions.forEach((position, stringIndex) => {
    position.forEach((fret, fretIndex) => {
      if (fret !== null) {
        fingers.push({
          cx:
            CHORD_WIDTH * 0.1 +
            ((CHORD_WIDTH * 0.8) / (chord.shapes.length - 1)) * stringIndex,
          cy: CHORD_HEIGHT * 0.1 + STRING_HEIGHT * fret,
          r: FINGER_RADIUS,
          fill: FINGER_COLOR,
        })
      }
    })
  })
  return (
    <svg width={CHORD_WIDTH} height={CHORD_HEIGHT}>
      {strings.map((string, index) => (
        <line
          key={`string-${index}`}
          x1={string.x1}
          y1={string.y1}
          x2={string.x2}
          y2={string.y2}
          stroke={STRING_COLOR}
          strokeWidth={1}
        />
      ))}
      {frets.map((fret, index) => (
        <line
          key={`fret-${index}`}
          x1={fret.x1}
          y1={fret.y1}
          x2={fret.x2}
          y2={fret.y2}
          stroke={FRET_COLOR}
          strokeWidth={2}
        />
      ))}
      {frets.map((fret, index) => (
        <text
          key={`fret-text-${index}`}
          x={fret.x1 - 5}
          y={fret.y1 - 10}
          fill={FRET_TEXT_COLOR}
          fontSize={14}
        >
          {index % 4 === 0 ? index : ''}
        </text>
      ))}
      {fingers.map((finger, index) => (
        <circle
          key={`finger-${index}`}
          cx={finger.cx}
          cy={finger.cy}
          r={finger.r}
          fill={finger.fill}
        />
      ))}
    </svg>
  )
}

export default ChordDiagram
