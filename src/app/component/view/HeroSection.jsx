"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-content-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
              Hello, I&apos;m{" "}
            </span>
            {/* <br/> */}
            <TypeAnimation
              sequence={[
                "Ruon",
                1500,
                "Mobile Developer",
                1500,
                "Web Developer",
                1500,
                "Back-end Developer",
                1500
              ]}  
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
            I am a software engineer, with extensive experience working in this field for a 
            long time and always interested in learning and applying the latest 
            technologies to create the best possible software products and services
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full sm:mt-auto mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white '>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] relative'>
            <Image className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src={'/images/doing-onlines.jpg'}
              priority={true} alt={''}
              width={300} height={300}/>
          </div>
        </div>
      </div>
    </section>
  )
}
