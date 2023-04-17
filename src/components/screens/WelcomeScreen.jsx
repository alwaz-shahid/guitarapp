import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'lotties/guitar-exercise.json';
import Features from 'components/molecules/Features';
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
    <section className='min-h-[80vh] p-5 w-full flex flex-col md:flex-row justify-between bg'>
      <div className='min-w-[60%] flex items-start justify-center flex-col space-y-5 p-5'>
        <h1 className='text-7xl'>Welcome to Gitarr</h1>
        <h2 className='text-3xl p-1  md:max-w-lg '>
          Empowering Your Guitar Journey with Innovative Tools.
        </h2>
        <p className=' p-1  md:max-w-lg'>
          We&apos;re excited to help you on your guitar journey. With our
          upcoming tools, we&apos;re confident that we can take your playing to
          the next level.{' '}
        </p>
        <button className='px-4 py-2 mx-1 rounded-md bg-yellow-300 '>
          Call to action
        </button>
      </div>
      <div className='md:p-2 '>
        <Lottie options={defaultOptions} height={500} width={400} />
      </div>
      <div className=''></div>
    </section>
  );
}
