import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = ({ chord }) => {
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
    <div>
      <h2>{chord.label}</h2>
      {chord.shapes.map((shape, index) => (
        <div key={index}>
          <h3>{shape.position}</h3>
          <Chord
            chord={{
              frets: shape.fingerings
                .split('')
                .map((char) => (char === 'X' ? 0 : parseInt(char))),
              fingers: shape.fingers
                .split('')
                .map((char) => (char === 'X' ? null : parseInt(char))),
              barres: shape.barres
                ? shape.barres.map((barre) => parseInt(barre))
                : [],
              capo: false,
            }}
            instrument={instrument}
            lite={lite}
          />
        </div>
      ))}
    </div>
  )
}

// import Chord from '@tombatossals/react-chords/lib/Chord'

// const MyChord = () => {
//   const chord = {
//     frets: [1, 3, 3, 2, 1, 1],
//     fingers: [1, 3, 4, 2, 1, 1],
//     barres: [1],
//     capo: false,
//   }
//   const instrument = {
//     strings: 6,
//     fretsOnChord: 4,
//     name: 'Guitar',
//     keys: [],
//     tunings: {
//       standard: ['E', 'A', 'D', 'G', 'B', 'E'],
//     },
//   }
//   const lite = false // defaults to false if omitted
//   return <Chord chord={chord} instrument={instrument} lite={lite} />
// }

// export default MyChord
