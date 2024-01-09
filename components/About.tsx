"use client";
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
import aboutMeImage from '../public/AboutMeImage.png'; 

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#86B6F6] text-2xl'>About</h3>
        

        <Image src={aboutMeImage} alt='Portfolio Image' className='-mb-20 mt-6 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]'/>


        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Get to Know Me Better</h4>
            <p className='text-base'>
              My journey as a software engineer began with a passion for problem-solving and has since evolved into a career where I've developed skills in various technologies such as C#, Python, Java, Angular, and React, to name a few. 
              During my experience at SOTI, as a Full Stack Software Developer, I led agile development, resolved bugs, and collaborated with teams to enhance MobiControl for over 17,000 businesses. 
              When not working, I'm either exploring music, at the gym, watching soccer or working on personal projects. I'm currently seeking new opportunities to contribute, learn, and grow within the industry. 
              Let’s connect! 
            </p>
        </div>

    </div>
  )
}

export default About