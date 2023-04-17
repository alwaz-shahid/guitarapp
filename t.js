// const notes = [
//   'A',
//   'A#/Bb',
//   'B',
//   'C',
//   'C#/Db',
//   'D',
//   'D#/Eb',
//   'E',
//   'F',
//   'F#/Gb',
//   'G',
//   'G#/Ab',
// ];

// function getNoteByIndex(startingIndex, interval) {
//   let targetIndex = startingIndex + interval;
//   // Handle cases where targetIndex is outside of the range of the notes array
//   if (targetIndex < 0) {
//     targetIndex += 12;
//   } else if (targetIndex > 11) {
//     targetIndex -= 12;
//   }
//   return notes[targetIndex];
// }

// // Example usage:
// // Get the note a major third above B
// const startingIndex1 = 3; // B
// const interval1 = 4; // 4 half-steps = major third
// const targetNote1 = getNoteByIndex(startingIndex1, interval1); // returns 'D#/Eb'
// console.log(targetNote1);

// // Get the note a perfect fifth below F#
// const startingIndex2 = 3; // F#/Gb
// const interval2 = -7; // -7 half-steps = perfect fifth
// const targetNote2 = getNoteByIndex(startingIndex2, interval2); // returns 'C#/Db'
// console.log(targetNote2);
const transpose = {
  C: {
    1: {
      chord: 'C#',
      shape: 'B',
      shapeAfterCapo: 'A#',
    },
    2: {
      chord: 'D',
      shape: 'C',
      shapeAfterCapo: 'B',
    },
    3: {
      chord: 'D#',
      shape: 'C#',
      shapeAfterCapo: 'C',
    },
    4: {
      chord: 'E',
      shape: 'D',
      shapeAfterCapo: 'C#',
    },
    5: {
      chord: 'F',
      shape: 'E',
      shapeAfterCapo: 'D',
    },
    6: {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    7: {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    8: {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
  },
  D: {
    1: {
      chord: 'D#',
      shape: 'C#',
      shapeAfterCapo: 'C',
    },
    2: {
      chord: 'E',
      shape: 'D',
      shapeAfterCapo: 'C#',
    },
    3: {
      chord: 'F',
      shape: 'E',
      shapeAfterCapo: 'D',
    },
    4: {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    5: {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    6: {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    7: {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    8: {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
  },
  // and so on for other chords...
  E: {
    1: {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    2: {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    3: {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    4: {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    5: {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    6: {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    7: {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    8: {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
  },
  F: {
    1: {
      chord: 'F#',
      shape: 'F',
      shapeAfterCapo: 'D#',
    },
    2: {
      chord: 'G',
      shape: 'F#',
      shapeAfterCapo: 'E',
    },
    3: {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    4: {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    5: {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    6: {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    7: {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    8: {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
  },

  G: {
    1: {
      chord: 'G#',
      shape: 'G',
      shapeAfterCapo: 'F',
    },
    2: {
      chord: 'A',
      shape: 'G#',
      shapeAfterCapo: 'F#',
    },
    3: {
      chord: 'A#',
      shape: 'A',
      shapeAfterCapo: 'G',
    },
    4: {
      chord: 'B',
      shape: 'A#',
      shapeAfterCapo: 'G#',
    },
    5: {
      chord: 'C',
      shape: 'B',
      shapeAfterCapo: 'A',
    },
    6: {
      chord: 'C#',
      shape: 'C',
      shapeAfterCapo: 'A#',
    },
    7: {
      chord: 'D',
      shape: 'C#',
      shapeAfterCapo: 'B',
    },
    8: {
      chord: 'D#',
      shape: 'D',
      shapeAfterCapo: 'C',
    },
  },
};

// const transposeChord = (chord, capoInitial, capoFinal) => {
//   const capo = capoFinal - capoInitial;
//   const chordParts = chord.split(' ');
//   const root = chordParts[0];
//   const shape = chordParts[1];
//   const shapeAfterCapo = transpose[root][shape].shapeAfterCapo;
//   return `${shapeAfterCapo}${shape}`;
// };
// console.log(transposeChord('C#1', 0, 2));

console.log(transpose['C'][1]);
