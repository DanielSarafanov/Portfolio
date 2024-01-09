"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

type Props = {
  imageSrc: StaticImageData; // Assuming you're using TypeScript
  title: string;
  description: string;
  skills: string;
  githubLink: string;
}

function Project({ imageSrc, title, description, skills, githubLink }: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        
        <a href= {githubLink}>
          <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
            <Image src={imageSrc} alt={title} className='h-60 w-60 rounded-[30px] cursor-pointer' />
          </motion.div>
        </a>
        
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>{title}</h4>
            <p className='text-sm text-center md:text-left'>{description}</p>
        </div>

        <p className='text-sm text-center md:text-left text-[#86B6F6]'>{skills}</p>

    </div>
  );
}

export default Project;
