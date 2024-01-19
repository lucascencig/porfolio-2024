import React from 'react'

const Skillsitem = ({ img }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group '>
      <img src={img} alt="/" className='rounded-xl w-20' />

    </div>
  )
}

export default Skillsitem