"use client";
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import Image from 'next/image';
import portfolioImage from '../public/PortfolioImage.png'; 
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}



function Hero({}: Props) {

    const [text,count] = useTypewriter({
        words: [
            "Hi, I'm Daniel Sarafanov",
            "A Freshly Graduated Computer Science Major", 
            "Looking For New Opportunities!"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const handleSmoothScroll = (e, target) => {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      };

  return (
    
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image src={portfolioImage} alt='Portfolio Image' className='relative rounded-full h-40 w-40 justify-center mx-auto object-cover'/>

        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#86B6F6] pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor = "#176B87" />
            </h1>
            
            <div className='pt-5'>

                <Link href="#about">
                    <button className='heroButton' onClick={(e) => handleSmoothScroll(e, '#about')}>About</button>
                </Link>

                <Link href="#experience">
                    <button className='heroButton' onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</button>
                </Link>

                <Link href="#skills">
                    <button className='heroButton ' onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</button>
                </Link>

                <Link href="#projects">
                    <button className='heroButton' onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</button>
                </Link>

            </div>
        </div>



    </div>
  )
}

export default Hero