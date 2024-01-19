import React from 'react'
import fotoPortfolio1 from '../assets/fotoPortfolio1.jpeg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover scale-y-[1] ' src={fotoPortfolio1} alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5lx text-4xl font-bold text-gray-800'>I´m Lucas Cencig</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Full Stack Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Oriented to',
                1000,
                'Front End Development',
                3000

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
              repeat={Infinity}
            />

          </h2>
          <div className='flex justify-around pt-6 max-w-[100px] w-full'>
            <a href="https://www.linkedin.com/in/lucas-cencig/" target='_blank'> <FaLinkedinIn className='cursor-pointer hover:scale-110 ease-in duration-100' size={30} /></a>
            <a href="https://github.com/lucascencig" target='_blank'><FaGithub className='cursor-pointer hover:scale-110 ease-in duration-100' size={30} /></a>
            <a href="https://api.whatsapp.com/send?phone=1536555953" target='_blank'><IoLogoWhatsapp className='cursor-pointer hover:scale-110 ease-in duration-100' size={30} /></a>

          </div>

          <div className='flex justify-center mt-6'>
            <a href='https://drive.google.com/file/d/1DqmKzTaHkXFNPuDESDLe0jEOuIgUYobw/view?usp=sharing' target='_blank' className='bg-[#001b5e] text-gray-100 font-semibold  w-full flex justify-center items-center rounded-lg shadow-lg  shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#02298d]'>Resume</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main