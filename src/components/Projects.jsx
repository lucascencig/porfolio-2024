import React from 'react'
import ProjectsItem from './ProjectsItem'
import project1 from '../assets/452shots_so.png'
import project2 from '../assets/newsletters1.png'
import project3 from '../assets/tateti1.png'
import project4 from '../assets/admin1.png'
import project5 from '../assets/mtp1.png'
import project6 from '../assets/mejorconsalud1.png'


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



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16 '>
      <h1 className='text-5xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 px-4 font-bold text-2xl'>Here you can see some projects I was working on!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectsItem img={project1} title='Chat Online' tools={'React, Tailwind, Vite, Node.js, Express, Socketio'} redirectUrl='https://chat-online-blue.vercel.app/' />
        <ProjectsItem img={project2} title='News Letter' tools={'React, Vite, Tailwind, CSS3'} redirectUrl='https://newsletter-sing-up-nu.vercel.app/' />
        <ProjectsItem img={project3} title='Tic-Tae-Toe' tools={'React, Vite, JavaScript, CSS3'} redirectUrl='https://tateti-ten.vercel.app/' />
        <ProjectsItem img={project4} title='Administrative System' tools={'React, Vite, Node.js, Express, MongoDB, Tailwind'} redirectUrl='https://muvinai-front-project.vercel.app/ ' />
        <ProjectsItem img={project5} title='Administrative System' tools={'React, CSS3, JavaScript, Node.js'} redirectUrl='https://www.mailtrackpro.com/' />
        <ProjectsItem img={project6} title='Mejor con salud' tools={'React, JavaScript, CSS3'} redirectUrl='https://frontend-dev-challenge-kappa.vercel.app/' />
      </div>
    </div>
  )
}

export default Projects