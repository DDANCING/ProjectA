import React from 'react';
import useGuitarTuner, { TunerResult } from './captator';

const GuitarTuner: React.FC = () => {
  const tunerResult: TunerResult | null = useGuitarTuner();

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-semibold mb-4'>Guitar Tuner</h1>
      {tunerResult ? (
        <div className='text-center'>
          <p className='text-2xl font-semibold'>{tunerResult.note}</p>
          <p className='text-lg text-gray-500'>{tunerResult.frequency.toFixed(2)} Hz</p>
        </div>
      ) : (
        <p className='text-gray-500'>Waiting for audio input...</p>
      )}
    </div>
  );
};

export default GuitarTuner;
