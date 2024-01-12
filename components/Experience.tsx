"use client";
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import SOTIExperienceCard from './SOTIExperienceCard';
import MusicProducerExperience from './MusicProducerExperience';
import Image from 'next/image';

type Props = {}

function Experience({}: Props) {

  return (
    <motion.div className='h-screen flex relative md:overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center '>
        
        <div className='flex justify-center mt-8 md:mt-0'>
          <h3 className='text-2xl text-[#86B6F6] uppercase tracking-[10px]'>Experience</h3>
        </div>

        <div className='w-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory scrollbar-track-[#176B87] scrollbar-thin scrollbar-thumb-[#ffffff]'>
            <SOTIExperienceCard />
            <MusicProducerExperience />
        </div>

    </motion.div>
  )
}

export default Experience