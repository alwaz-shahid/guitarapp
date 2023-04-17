const transpose = {
  C: {
    '1st': {
      chord: 'C#',
      shape: 'B',
      shapeAfterCapo: 'A#',
    },
    '2nd': {
      chord: 'D',
      shape: 'C',
      shapeAfterCapo: 'B',
    },
    '3rd': {
      chord: 'D#',
      shape: 'C#',
      shapeAfterCapo: 'C',
    },
    '4th': {
      chord: 'E',
      shape: 'D',
      shapeAfterCapo: 'C#',
    },
    '5th': {
      chord: 'F',
      shape: 'E',
      shapeAfterCapo: 'D',
    },
    '6th': {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    '7th': {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    '8th': {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
  },
  D: {
    '1st': {
      chord: 'D#',
      shape: 'C#',
      shapeAfterCapo: 'C',
    },
    '2nd': {
      chord: 'E',
      shape: 'D',
      shapeAfterCapo: 'C#',
    },
    '3rd': {
      chord: 'F',
      shape: 'E',
      shapeAfterCapo: 'D',
    },
    '4th': {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    '5th': {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    '6th': {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    '7th': {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    '8th': {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
  },
  // and so on for other chords...
  E: {
    '1st': {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    '2nd': {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    '3rd': {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    '4th': {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    '5th': {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    '6th': {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    '7th': {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    '8th': {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
  },
  F: {
    '1st': {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    '2nd': {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    '3rd': {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    '4th': {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    '5th': {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    '6th': {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    '7th': {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    '8th': {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
  },

  G: {
    '1st': {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    '2nd': {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    '3rd': {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    '4th': {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    '5th': {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    '6th': {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
    '7th': {
      chord: 'D',
      shape: 'C#',
      shapeAfterCapo: 'B',
    },
    '8th': {
      chord: 'D#',
      shape: 'D',
      shapeAfterCapo: 'C',
    },
  },
};

const transposeChord = (chord = 'A', capoInitial = 0, capoFinal) => {
  const capo = capoInitial == 0 ? '' : capoInitial;
  const chordParts = chord.split(' ');
  const root = chordParts[0];
  const shape = chordParts[1];
  const shapeAfterCapo = transpose[root][shape].shapeAfterCapo;
  return `${shapeAfterCapo}${shape}`;
};
console.log(transposeChord('C#1', 0, 2));
