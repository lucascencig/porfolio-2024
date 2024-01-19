import React from 'react'

const ProjectsItem = ({ img, title, tools, redirectUrl }) => {
  return (
    <div className='relative flex items-center justify-center m-auto h-auto w-10/12 shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-300 ease-in hover:duration-200'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 transform-rotate-z-2' />
      <div className='hidden group-hover:block group-hover:ease-in group:hover:duration-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover '>
        <h3 className='text-2xl font-bold text-gray-700 tracking-wider text-center'>
          {title}
        </h3>
        <p className='flex justify-center items-center m-auto pb-4 pt-2 text-gray-700 text-center'>{tools}</p>
        <a href={redirectUrl} target='_blank'>
          <p className='flex justify-center items-center m-auto text-center p-3 rounded-lg bg-[#001b5e] hover:bg-[#02298d] ease-in duration-200 text-white font-bold cursor-pointer text-lg'>See project</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem