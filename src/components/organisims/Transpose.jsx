import { Select } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

const Transpose = () => {
  const [transposeData, setTransposeData] = useState(null);
  const options = Array.from({ length: 9 }, (_, i) => i);
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    onChange(value);
  };
  useEffect(() => {
    async function loadData() {
      const data = await import('../../utils/transpose.json');
      setTransposeData(data);
    }
    loadData();
    // console.log(transposeData.C);
  }, []);
  const transposeChord = (
    chord = 'A',
    capoInitial = 0,
    capoFinal = 1,
    data = transposeData
  ) => {
    if (capoInitial < 0 || capoFinal < 0 || capoInitial > 8 || capoFinal > 8) {
      throw new Error('Invalid capo position!');
    }
    if (capoInitial === 0) {
      const oldChords = data[chord][capoInitial];
      const newChords = data[chord][capoFinal];
      return { newChords, oldChords };
    }
    if (capoInitial > 0 && capoInitial < 8) {
      const oldChords = data[chord][capoInitial];
      const newChords = data[chord][capoFinal];
      return { newChords, oldChords };
    }
  };

  return (
    <div>
      {transposeData ? (
        <Select placeholder='Select option'>
          {Object.keys(transposeData).map((key) => (
            <option label={key} key={key}>
              {key}
            </option>
          ))}
        </Select>
      ) : (
        <p>Loading...</p>
      )}
      <Select placeholder='Select option'>
        {options.map((option) => (
          <option key={option} value={option}>
            {option === 0 ? 'Open' : `Fret ${option}`}
          </option>
        ))}
      </Select>
      <Select placeholder='Select option'>
        {options.map((option) => (
          <option key={option} value={option}>
            {option === 0 ? 'Open' : `Fret ${option}`}
          </option>
        ))}
      </Select>

      {/* {transposeData ? (
        <Select placeholder='Select option' className='bg-white'>
          <option value='option1'>{transposeData.C[1].chord}</option>
          <option value='option2'>{transposeData.C[2].chord}</option>
          <option value='option3'>{transposeData.C[3]['chord']}</option>
          <option value='option4'>
            {transposeData.C[4]['shapeAfterCapo']}
          </option>
        </Select>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default Transpose;
