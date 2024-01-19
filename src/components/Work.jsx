import React from 'react'
import WorkItem from './WorkItem'


const data = [
  {
    year: 2020,
    title: 'Standar Aridos (Full Stack Developer)',
    duration: 'Mar-2020 - Nov-2022',
    details: 'Develop systems and tools with emphasis on performance and scalability, maintain databases with PostgreSQL, functional and technical documents, dashboard and interface maintenance. I increased the company`s income by 35% through the creation of an E-commerce for the purchase of manufactured paints, textured coatings and membranes.'
  },
  {
    year: 2022,
    title: 'Full Stack Teaching Assisttant - Soy Henry',
    duration: 'Apr-2022 - Nov-2022',
    details: 'Coordinate a group of students to achieve integration into the study team. Assist in solving exercises and promoting group collaboration (Pair Programming). Assist in solving exercises and promoting group collaboration (Pair Programming)'
  },
  {
    year: 2022,
    title: 'Click Experts (Full Stack Developer)',
    duration: 'Nov-2022 - Apr-2023',
    details: 'Developed a mass email automation system for American Express, using JavaScript, Microsoft Azure, SharePoint, Node.Js. Develop landing pages, dashboards and online applications using React.js, Vue.Js, JavaScript, Node.Js, PHP. Design interfaces and Front-End elements, maintain and optimize websites and interfaces.'
  }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-5xl mb-10 font-bold text-center text-[#001b5e]'>Work</h1>

      {
        data.map((item, index) => {
          return (
            <WorkItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          )
        })
      }
    </div>
  )
}

export default Work