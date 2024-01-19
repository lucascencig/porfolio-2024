import React, { useState } from 'react'


const Contact = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    // Regex for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    // Reset errors
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setSubjectError('');
    setMessageError('');

    // Validation logic
    if (name === '') {
      setNameError('Name is required');
    }

    if (phone === '') {
      setPhoneError('Phone number is required');
    }

    if (email === '') {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    }

    if (subject === '') {
      setSubjectError('Subject is required');
    }

    if (message === '') {
      setMessageError('Message is required');
    } else if (message.length < 20) {
      setMessageError('Message should be at least 20 characters');
    }

    // If no errors, submit the form
    if (
      !nameError &&
      !phoneError &&
      !emailError &&
      !subjectError &&
      !messageError
    ) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        Contact
      </h1>

      <form action="https://getform.io/f/5e547dd0-b63e-4127-bc6b-bf5bdcd2b53a" method="POST" >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none'
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />

            {(formSubmitted && nameError) && <span className='text-red-500'>{nameError}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Numer</label>

            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none'
              type='text'
              name='phone'
              onChange={(e) => setPhone(e.target.value)}
            />

            {(formSubmitted && phoneError) && <span className='text-red-500'>{phoneError}</span>}
          </div>
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>

          <input
            className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none'
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />

          {(formSubmitted && emailError) && <span className='text-red-500'>{emailError}</span>}
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>

          <input
            className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none'
            type='text'
            name='subject'
            onChange={(e) => setSubject(e.target.value)}
          />
          {(formSubmitted && subjectError) && <span className='text-red-500'>{subjectError}</span>}

        </div>

        <div className='flex flex-col py-2 '>
          <label className='uppercase text-sm py-2'>Message</label>

          <textarea className=' w-full border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] outline-none resize-none' name="message" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
          {(formSubmitted && messageError) && <span className='text-red-500'>{messageError}</span>}
        </div>

        <button onSubmit={validate} className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-[#02298d] ease-in duration-200 font-bold cursor-pointer text-lg' >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact