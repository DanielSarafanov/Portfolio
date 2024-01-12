import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import sotiLogo from '../public/SotiLogo.jpeg'
import firstSKill from '../public/CSharp.png'
import secondSkill from "../public/Angular.png";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#b2d5ff] p-10 hover:opacity-100 opacity-40 hover:bg-[#d5e8ff] cursor-pointer transition-opacity duration-200'>
        <Image className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={sotiLogo} alt='Skills Image'/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Full Stack Software Developer</h4>
            <p className='font-bold text-2xl'>SOTI.Inc</p>
            <div className='flex space-x-2 my-2'>
              <Image className='w-10 h-10 rounded-full' src={firstSKill} alt='Skills Image'/>
              <Image className='w-10 h-10 rounded-full' src={secondSkill} alt='Skills Image'/>
            </div>
            <p className='uppercase py-5 text-[#86B6F6]'>September 2022 - September 2023</p>
            <div className='h-[100px] overflow-y-scroll scrollbar-track-[#176B87] scrollbar-thin scrollbar-thumb-white'>
              <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Led the end-to-end agile development of new features in MobiControl, a cutting edge MDM application.</li>
                <li>Created both frontend and backend design documents.</li>
                <li>Facilitated design review meetings with lead architects, ensuring feedback and authorization.</li>
                <li>Coordinated with Product Management team to analyze and identify customer needs</li>
                <li>Worked closely with the database team to design new SQL stored procedures.</li>
                <li>Implemented several new API routes.</li>
                <li>Designed frontend interfaces for new features with TypeScript and Angular framework.</li>
                <li>Debugged and resolved issues to ensure smooth functionality and optimal performance of web applications.</li>
                <li>Utilized version control systems, particularly GitHub, for code versioning and collaboration.</li>
                <li>Enhanced MobiControl for over 17,000+ concurrent businesses, optimizing application organization and presentation.</li>
                <li>Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, unit testing.</li>
              </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard