import React, { useState } from 'react'
import '../index.css'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { GiSkills } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Sidenav = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      {
        nav ? (
          <RxCross1 onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden rounded-full bg-[#001b5e] text-white shadow-lg shadow-gray-400 w-12 h-12 p-2 cursor-pointer focus:bg-[#02298d]' size={20} />

        ) :
          (
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden rounded-full bg-[#001b5e] text-white shadow-lg shadow-gray-400 w-12 h-12 p-2 cursor-pointer focus:bg-[#02298d]' size={20} />

          )

      }
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b5e] hover:text-white'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>

            <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b5e] hover:text-white'>
              <GrProjects size={20} />
              <span className='pl-4'>Work</span>
            </a>

            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b5e] hover:text-white'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>

            <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b5e] hover:text-white'>
              <GiSkills size={20} />
              <span className='pl-4'>Skills</span>
            </a>

            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b5e] hover:text-white'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        ) :
          (
            ''
          )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#001b5e] hover:text-white'>
            <AiOutlineHome size={20} />
          </a>

          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#001b5e] hover:text-white'>
            <GrProjects size={20} />
          </a>

          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#001b5e] hover:text-white'>
            <AiOutlineProject size={20} />
          </a>

          <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#001b5e] hover:text-white'>
            <GiSkills size={20} />
          </a>

          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#001b5e] hover:text-white'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>


    </div>
  )
}

export default Sidenav