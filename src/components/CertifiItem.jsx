import React from 'react'

const CertificItem = ({ img, title, tools, redirectUrl }) => {
  return (
    <div className='relative flex items-center justify-center m-auto my-2 h-auto w-64 shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-300 ease-in hover:duration-200'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 transform-rotate-z-2 mx-4' />
      <div className='hidden group-hover:block group-hover:ease-in group:hover:duration-200 w-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover '>
        <h3 className='text-xl font-bold text-gray-700 tracking-wider text-center'>
          {title}
        </h3>
        <p className='flex justify-center items-center m-auto pb-4 pt-2 text-gray-700 text-center'>{tools}</p>
        <a href={redirectUrl} target='_blank'>
          <p className='flex justify-center items-center m-auto text-center p-3 rounded-lg bg-[#001b5e] hover:bg-[#02298d] ease-in duration-200 text-white font-bold cursor-pointer text-md'>See certificate</p>
        </a>
      </div>
    </div>
  )
}

export default CertificItem