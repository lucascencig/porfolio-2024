import React from 'react'
import Skillsitem from './Skillsitem'
import jsimg from '../assets/js.jpg'
import reactimg from '../assets/react.png'
import htmlimg from '../assets/html.png'
import cssimg from '../assets/css.png'
import tailwindimg from '../assets/tailwind.png'
import sassimg from '../assets/sass.png'
import viteimg from '../assets/vite.png'
import reduximg from '../assets/redux.png'
import nodeimg from '../assets/node.png'
import expressimg from '../assets/express.png'
import mongoimg from '../assets/mongo.png'
import sqliteimg from '../assets/sqlite.png'
import postgresqlimg from '../assets/postgresql.png'
import sequelizeimg from '../assets/sequelize.png'
import firebaseimg from '../assets/firebaseimg.png'
import githubimg from '../assets/github.png'
import gitimg from '../assets/git.png'
import socketioimg from '../assets/socketio.png'

const Skills = () => {
  return (
    <div id="skills" className='max-w-[1040px] m-auto sm:flex flex-wrap md:flex lg:flex flex-col justify-around items-center pt-16 border-t-[#fff] border-t-2 pb-8 border-[#ffffff0] overflow-hidden'>
      <h1 className='text-5xl font-bold text-center text-[#001b5e]'>Skills</h1>
      <div>
        <p className='text-center py-8 px-4 font-bold text-2xl'>In all these 3 years as a full stack developer I have been able to develop my best skills in everything you can see here!</p>

      </div>
      <div className='grid grid-cols-4 md:grid-cols-4 gap-4 w-full max-w-screen-lg mt-2 sm:w-10/12 sm:p-4'>
        <Skillsitem img={jsimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={reactimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={htmlimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={cssimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={tailwindimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={sassimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={viteimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={reduximg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={nodeimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={expressimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={mongoimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={sqliteimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={postgresqlimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={sequelizeimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={firebaseimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={githubimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={gitimg} className='w-16 flex justify-center items-center m-auto' />
        <Skillsitem img={socketioimg} className='w-16 flex justify-center items-center m-auto' />


      </div>
    </div>


  )
}

export default Skills