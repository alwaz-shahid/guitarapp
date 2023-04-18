import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';
const features = [
  {
    title: 'Chord Finder',
    desc: "Whether you're a beginner or a seasoned musician, finding the right chords can be a challenge. That's where our Chord Finder comes in. Simply input the chord you're looking for and our tool will show you how to play it on the guitar, piano, ukulele, or any other instrument you choose. With our Chord Finder, you'll never have to struggle to find the right chord again.",
  },
  {
    title: 'Scale Finder',
    desc: "Want to learn a new scale? Our Scale Finder tool allows you to input a scale and see how it's played on the guitar, piano, ukulele, or any other instrument. With our easy-to-use tool, you'll be able to master any scale in no time.",
  },
  {
    title: 'Transposition Tool',
    desc: "Need to transpose a chord or scale to a different key? Our Transposition Tool makes it easy. Simply input the chord or scale and our tool will show you how to play it in a different key. With our Transposition Tool, you'll be able to play your favorite songs in any key you want.",
  },
  {
    title: 'Tuner',
    desc: "Keeping your instrument in tune is essential to making great music. Our Tuner tool helps you do just that. With our easy-to-use tool, you'll be able to tune your guitar, piano, ukulele, or any other instrument quickly and easily.",
  },
  {
    title: 'Metronome',
    desc: "Timing is everything in music. Our Metronome tool helps you keep time while practicing. With our easy-to-use tool, you'll be able to set the tempo and get the rhythm just right.",
  },
  {
    title: 'Music Theory Lessons',
    desc: "Want to learn music theory? Our Music Theory Lessons section is the perfect place to start. With lessons on scales, chords, rhythm, and more, you'll be able to master the fundamentals of music in no time. Whether you're a beginner or an advanced musician, our Music Theory Lessons will help take your skills to the next level.",
  },
];

export default function Features() {
  return (
    <Accordion p={5}>
      {features.map((feature, i) => (
        <AccordionItem key={i} pb={4}>
          <AccordionButton bg='ghostwhite'>
            {feature.title}

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>{feature.desc}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
