import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = ({
  chord = {
    label: 'A Major',
    value: 'A',
    shapes: [
      { fingerings: 'X02220', position: '1st Fret' },
      { fingerings: '577655', position: '5th Fret' },
      { fingerings: 'X02255', position: '5th Fret' },
    ],
  },
}) => {
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
    <div className="max-h-32 max-w-xs p-5">
      <h2 className="text-3xl font-bold ">Chord {chord?.label}</h2>
      <span className="inline-flex">
        {chord.shapes.map((shape, index) => (
          <div key={index} className="flex">
            <h3>{shape.position}</h3>
            <Chord
              chord={{
                frets: shape.fingerings
                  .split('')
                  .map((char) => (char === 'X' ? 0 : parseInt(char))),
                fingers: shape.fingerings
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
      </span>
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

export default MyChord
