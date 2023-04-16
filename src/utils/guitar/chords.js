export const allChords = [
  { label: 'A Major', value: 'A', shape: ['x', '0', '2', '2', '2', '0'] },
  { label: 'A Minor', value: 'Am', shape: ['x', '0', '2', '2', '1', '0'] },
  { label: 'A# Major', value: 'A#', shape: ['1', '3', '3', '3', '1', '1'] },
  { label: 'A# Minor', value: 'A#m', shape: ['1', '3', '3', '2', '1', '1'] },
  { label: 'B Major', value: 'B', shape: ['x', '2', '4', '4', '4', '2'] },
  { label: 'B Minor', value: 'Bm', shape: ['x', '2', '4', '4', '3', '2'] },
  { label: 'C Major', value: 'C', shape: ['x', '3', '2', '0', '1', '0'] },
  { label: 'C Minor', value: 'Cm', shape: ['x', '3', '5', '5', '4', '3'] },
  { label: 'C# Major', value: 'C#', shape: ['x', '4', '6', '6', '6', '4'] },
  { label: 'C# Minor', value: 'C#m', shape: ['x', '4', '6', '6', '5', '4'] },
  { label: 'D Major', value: 'D', shape: ['x', 'x', '0', '2', '3', '2'] },
  { label: 'D Minor', value: 'Dm', shape: ['x', 'x', '0', '2', '3', '1'] },
  { label: 'D# Major', value: 'D#', shape: ['x', 'x', '1', '3', '4', '3'] },
  { label: 'D# Minor', value: 'D#m', shape: ['x', 'x', '1', '3', '4', '2'] },
  { label: 'E Major', value: 'E', shape: ['0', '2', '2', '1', '0', '0'] },
  { label: 'E Minor', value: 'Em', shape: ['0', '2', '2', '0', '0', '0'] },
  { label: 'F Major', value: 'F', shape: ['1', '3', '3', '2', '1', '1'] },
  { label: 'F Minor', value: 'Fm', shape: ['1', '3', '3', '1', '1', '1'] },
  { label: 'F# Major', value: 'F#', shape: ['2', '4', '4', '3', '2', '2'] },
  { label: 'F# Minor', value: 'F#m', shape: ['2', '4', '4', '2', '2', '2'] },
  { label: 'G Major', value: 'G', shape: ['3', '2', '0', '0', '0', '3'] },
  { label: 'G Minor', value: 'Gm', shape: ['3', '2', '0', '0', '0', '3'] },
]
export const majorChords = [
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
]

export const minorChords = [
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

export const chords = { ...majorChords, ...minorChords }
