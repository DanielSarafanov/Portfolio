"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {

  const handleSmoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
        
        {/* top left */}
        <motion.div 
        initial = {{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1         
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons*/}
            
            <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
              <SocialIcon url='https://www.linkedin.com/in/daniel-sarafanov-2b11831a7/' fgColor='#86B6F6' bgColor='transparent'></SocialIcon>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
              <SocialIcon url='https://github.com/DanielSarafanov' fgColor='#86B6F6' bgColor='transparent'></SocialIcon>
            </motion.div>
            

        </motion.div>

        {/* top right */}
        <motion.div 
        initial = {{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1         
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons*/}
            <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
              <SocialIcon className='cursor-pointer' network='email' fgColor='#86B6F6' bgColor='transparent'  onClick={(e) => handleSmoothScroll(e, '#contactMe')}></SocialIcon>
            </motion.div>
            <p className='uppercase hidden md:inline-flex text-sm text-general-text'>Contact Me</p>
        </motion.div>

    </header>
  )
}