"use client";
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
import aboutMeImage from '../public/AboutMeImage.png'; 

type Props = {}

function About({}: Props) {

  const handleSmoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col h-screen max-w-7xl px-10 mx-auto'>
        <div className='flex justify-center mt-20 md:mt-0'>
          <h3 className='text-2xl text-[#86B6F6] uppercase tracking-[10px] md:mt-20'>About</h3>
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center text-center md:text-left flex-grow'>
            <Image src={aboutMeImage} alt='Portfolio Image' className='my-6 md:my-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]' />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Get to Know Me Better</h4>
                <p className='text-base'>
                  My journey as a software engineer began with a passion for problem-solving and has since evolved into a career where Iv&apos;e developed skills in various technologies such as C#, Python, Java, Angular, and React, to name a few. 
              During my experience at SOTI, as a Full Stack Software Developer, I led agile development, resolved bugs, and collaborated with teams to enhance MobiControl for over 17,000 businesses. 
              I&apos;m currently seeking new opportunities to contribute, learn, and grow as a software engineer. 
              <span className='uppercase font-semibold cursor-pointer text-lg animate-pulse'  onClick={(e) => handleSmoothScroll(e, '#contactMe')}> LET&apos;S CONNECT!</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About