import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'lotties/guitar-exercise.json';
export default function WelcomeScreen() {
  const defaultOptions = {
    // loop: true,
    // autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className='min-h-[80vh] p-5 w-full flex justify-between'>
      <div className='min-w-[60%] flex items-start justify-center flex-col space-y-5'>
        <h1 className='text-7xl'>Welcome to Gitarr</h1>
        <h2 className='text-3xl p-1'>
          Empowering Your Guitar Journey with Innovative Tools.
        </h2>
      </div>
      <div className='p-2 '>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className=''></div>
    </section>
  );
}
