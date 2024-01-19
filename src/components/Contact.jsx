import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>

      <form action="https://getform.io/f/5e547dd0-b63e-4127-bc6b-bf5bdcd2b53a" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none' type="text" name='name' />
          </div>

          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Numer</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none' type="text" name="phone" />
          </div>
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex focus:border-[#001b5e] outline-none' type="email" name="email" />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none' type="text" name="subject" />
        </div>

        <div className='flex flex-col py-2 '>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className=' w-full border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] outline-none resize-none' name="message" rows="10"></textarea>
        </div>

        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-[#02298d] ease-in duration-200 font-bold cursor-pointer text-lg' >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact