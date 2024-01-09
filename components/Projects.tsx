"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';
import FirstProjectImage from '../public/SpotifyExplore.jpg';
import SecondProjectImage from '../public/DiscoverWeekly.jpeg'; 
import ThirdProjectImage from '../public/Spotter.png'; 

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#86B6F6] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-[#176B87] scrollbar-thumb-[#ffffff] scrollbar'>
          <Project 
            imageSrc={FirstProjectImage} 
            title="Spotify Explore" 
            description="Leveraged Spotify's public APIs to develop a website offering users access to global music trends. This platform enables users to explore popular tracks from various countries, discover new sounds from around the world, and seamlessly add selections to their personal playlists."
            skills='Implemented using React.js frontend with a Node.js and Express.js backend.'
            githubLink='https://github.com/'
          />
          <Project 
            imageSrc={SecondProjectImage} 
            title="Discover Weekly Archiver" 
            description="Developed an automation API leveraging Spotify's public APIs to archive Discover Weekly playlists."
            skills='Implemented using Python and Flask.'
            githubLink='https://github.com/'
          />
          <Project 
            imageSrc={ThirdProjectImage} 
            title="SPOTTER" 
            description="Developed an iOS application, Spotter, designed for gym enthusiasts and beginners. The app provides features for users to track their gym activities and monitor progress. It offers real-time tracking and personalized settings to support consistent gym habits."
            skills='Implemented using Swift with a Firebase backend.'
            githubLink='https://github.com/'
          />
        </div>

    </div>
  );
}

export default Projects;