import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div className='relative flex justify-center items-center' initial={{ opacity: 0,}} animate={{ scale: [1,2,2,3,1], opacity: [0.1, 0.2,0.4,0.8,0.1,1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"], }} transition = {{ duration: 2, }}>
        <div className='absolute border border-[#c7dfff] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        {/* <div className=' rounded-full border border-[#CCE0FF] h-[300px] w-[300px] mt-52 absolute'/> */}
        <div className=' rounded-full border border-[#c6e0ff] h-[500px] w-[500px] mt-52 absolute'/>
        <div className='rounded-full border border-[#81a5b9] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse absolute'/>
        <div  className='rounded-full border border-[#85b6d3] opacity-20 h-[800px] w-[800px] mt-52 absolute'/>
    </motion.div>
  )
}

export default BackgroundCircles