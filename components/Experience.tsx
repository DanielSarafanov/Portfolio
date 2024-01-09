"use client";
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import SOTIExperienceCard from './SOTIExperienceCard';
import MusicProducerExperience from './MusicProducerExperience';
import Image from 'next/image';

type Props = {}

function Experience({}: Props) {

  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#86B6F6] text-2xl'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-[#176B87] scrollbar-thin scrollbar-thumb-[#ffffff]'>
            <SOTIExperienceCard />
            <MusicProducerExperience />
        </div>

    </motion.div>
  )
}

export default Experience