import { Button, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { transposeChord } from 'utils/transpose';
import TransposeTable from './TransposeTable';
import TransposeInstructions from './TransposeInstructions';

const Transpose = () => {
  const [transposeData, setTransposeData] = useState(null);
  const [data, setData] = useState({
    chord: 'C',
    capoInitial: 0,
    capoFinal: 1,
  });

  //   const [chord, setChord] = useState('C');
  //   const [capoInitial, setCapoInitial] = useState(0);
  //   const [capoFinal, setCapoFinal] = useState(1);

  const options = Array.from({ length: 9 }, (_, i) => i);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'chord':
        // setChord(value);
        // alert(value);
        setData({ ...data, chord: value });
        break;
      case 'capoInitial':
        // setCapoInitial(parseInt(value));
        setData({ ...data, capoInitial: parseInt(value) });
        // alert(value);
        break;
      case 'capoFinal':
        // setCapoFinal(parseInt(value));
        setData({ ...data, capoFinal: parseInt(value) });
        // alert(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    async function loadData() {
      const res = await import('../../../utils/transpose.json');
      setTransposeData(res);
    }
    loadData();
  }, []);

  const handleTtransposedChord = () => {
    setData({
      ...data,
      transposedChord: transposeChord(
        data.chord,
        data.capoInitial,
        data.capoFinal,
        transposeData
      ),
      //   const transposedChord = transposeChord(
      //     chord,
      //     capoInitial,
      //     capoFinal,
      //     transposeData
      //   );
    });
  };
  const fretLabel = [
    'Open',
    'Fret 1',
    'Fret 2',
    'Fret 3',
    'Fret 4',
    'Fret 5',
    'Fret 6',
    'Fret 7',
    'Fret 8',
  ];

  return (
    <div className='p-5'>
      <TransposeInstructions />
      <div className='flex lg:flex-row flex-col flex-auto gap-2 py-2 border-b-2 border-purple-400 rounded-mg shadow-lg my-5'>
        <div className='flex-1'>
          <label className='text-sm lg:text-base '>Select Chord</label>
          {transposeData && (
            <Select
              variant='filled'
              // bg='ghostwhite'
              bg='purple.100'
              color='brand.900'
              name='chord'
              value={data?.chord}
              onChange={handleChange}
              placeholder='Select chord'>
              {Object.keys(transposeData).map((key) => (
                <option label={key} key={key}>
                  {key}
                </option>
              ))}
            </Select>
          )}
        </div>
        <div className='flex-1'>
          <label className='textsm lg:text-base '>Select Initial Fret</label>
          <Select
            bg='purple.100'
            name='capoInitial'
            value={data?.capoInitial}
            onChange={handleChange}
            placeholder='Select initial fret'>
            {options.map((option) => (
              <option key={option} value={option}>
                {option === 0 ? 'Open' : `Fret ${option}`}
              </option>
            ))}
          </Select>
        </div>
        <div className='flex-1'>
          <label className='textsm lg:text-base '>Select Final Fret</label>
          <Select
            // variant='outline'
            bg='purple.100'
            // bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
            name='capoFinal'
            value={data?.capoFinal}
            onChange={handleChange}
            placeholder='Select final fret'>
            {options.map((option) => (
              <option key={option} value={option}>
                {option === 0 ? 'Open' : `Fret ${option}`}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <Button
        variant={'outline'}
        bg={'red.300'}
        m={5}
        onClick={handleTtransposedChord}
        color={'blackAlpha.600'}>
        Get Transposed Chords
      </Button>
      {/* {transposedChord && (
        <p>Transposed chord: {JSON.stringify(transposedChord)}</p>
      )} */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <p>Selected Chord: {data?.chord}</p>
        <p>capoInitial:{fretLabel[data?.capoInitial]}</p>
        <p>capoFinal:{fretLabel[data?.capoFinal]}</p>
      </div>
      <TransposeTable />
    </div>
  );
};

export default Transpose;
