"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill';
import FirstSkill from '../public/CSharp.png';
import SecondSkill from '../public/Angular.png'
import ThirdSkill from '../public/mysql.png'
import FourthSkill from '../public/React-icon.svg.png'
import FifthSkill from '../public/html-5.png'
import SixthSkill from '../public/js.png'
import SeventhSkill from '../public/CSS.png'
import EighthSkill from '../public/NodeJs.png'
import NinthSkill from '../public/NextJSLogo.png'
import TenthSkill from '../public/typescript (1).png'
import ElevenSkill from '../public/python.png'
import TwelveSkill from '../public/Java.png'
import ThirteenSkill from '../public/swift (1).png'
import FourteenSkill from '../public/VSCODELOGO.png'
import FifteenSkill from '../public/C.png'
import SixteenSkill from '../public/linux.png'
import SeventeenSkill from '../public/WindowsLogo.png'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'

    >

        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#86B6F6] text-2xl'>Skills</h3>

        <motion.div className='grid grid-cols-4 gap-4'
        initial={{x:-200, opacity:0}} transition={{duration:2}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
            <Skill skillsImage={FirstSkill}/>
            <Skill skillsImage={SecondSkill}/>
            <Skill skillsImage={ThirdSkill}/>
            <Skill skillsImage={FourthSkill}/>
            <Skill skillsImage={FifthSkill}/>
            <Skill skillsImage={SixthSkill}/>
            <Skill skillsImage={SeventhSkill}/>
            <Skill skillsImage={EighthSkill}/>
            <Skill skillsImage={NinthSkill}/>
            <Skill skillsImage={TenthSkill}/>
            <Skill skillsImage={ElevenSkill}/>
            <Skill skillsImage={TwelveSkill}/>
            <Skill skillsImage={ThirteenSkill}/>
            <Skill skillsImage={FifteenSkill}/>
            <Skill skillsImage={SixteenSkill}/>
            <Skill skillsImage={SeventeenSkill}/>
            <Skill skillsImage={FourteenSkill}/>
        </motion.div>

    </motion.div>
  )
}

export default Skills