import Image from 'next/image'
import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import ContactMe from '../../components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[#EEF5FF] text-general-text h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
     scrollbar-track-[#176B87] scrollbar-thin scrollbar-thumb-white'>
      <Head>
        <title>Daniel Sarafanov&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start scroll-smooth'>
        <Hero/>
      </section>

      <section id="about" className='snap-center scroll-smooth'>
        <About />
      </section>

      <section id="experience" className='snap-center scroll-smooth'>
        <Experience />
      </section>

      <section id='skills' className='snap-center scroll-smooth'>
        <Skills />
      </section>

      <section id='projects' className='snap-center scroll-smooth'>
        <Projects />
      </section>

      <section id='contactMe' className='snap-center scroll-smooth'> 
        <ContactMe />
      </section>

    </div>
  )
}
