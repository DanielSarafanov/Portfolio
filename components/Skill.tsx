"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image';

type Props = {
    skillsImage: StaticImageData;
}

export default function Skill({skillsImage}: Props) {
  return (
    <div className='group relative items-center'>
        <motion.div
        className='p-4 border-[#c6deff] object-cover h-20 w-20 xl:w-32 xl:h-32 overflow-hidden items-center'>
            <Image src={skillsImage} alt='Skills Image'/>
        </motion.div>
    </div>
  )
}