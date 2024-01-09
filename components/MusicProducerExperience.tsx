import React from 'react'
import Image from 'next/image'
import sotiLogo from '../public/Daniel Sara Logo.webp'

type Props = {}

const MusicProducerExperience = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#b2d5ff] p-10 hover:opacity-100 opacity-40 hover:bg-[#d5e8ff] cursor-pointer transition-opacity duration-200'>
        <Image className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={sotiLogo} alt='Skills Image'/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Music Producer/Engineer</h4>
            <p className='font-bold text-2xl'>Independent</p>
            <div className='flex space-x-2 my-2'>
            </div>
            <p className='uppercase py-5 text-[#86B6F6]'>2017-2022</p>
            <div className='h-[100px] overflow-y-scroll scrollbar-track-[#176B87] scrollbar-thin scrollbar-thumb-white'>
              <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Oversaw development of music to ensure musicians visions are fulfilled in terms of composition, vocals, sound effects and instrumental arrangements</li>
                <li>Advanced experience with various digital audio workstations</li>
              </ul>
            </div>
        </div>
    </article>
  )
}

export default MusicProducerExperience