import React from 'react'
import CertificItem from './CertifiItem'
import certificate1 from '../assets/certificadohenry.jpg'
import certificate2 from '../assets/certificadoresponsive.jpg'
import certificate3 from '../assets/certificadoLinkedin.jpg'




const Certific = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16 '>
      <h1 className='text-5xl font-bold text-center text-[#001b5e]'>Certificates</h1>
      <p className='text-center py-8 px-4 font-bold text-2xl'>Here you can see some projects I was working on!</p>
      <div className='w-full flex flex-wrap justify-between items-center m-auto'>
        <CertificItem img={certificate1} title='Full Stack Developer' tools={'Soy Henry Bootcamp'} redirectUrl='https://certificates.soyhenry.com/cert?id=affeafc9-8586-4ae0-b86d-a13ff4aff5fc' />
        <CertificItem img={certificate2} title='Responsive Web Design' tools={'Free Code Camp'} redirectUrl='https://www.freecodecamp.org/certification/fccf8cc03d1-ad20-44cf-a688-542401da2db9/responsive-web-design' />
        <CertificItem img={certificate3} title='Web Development fundamentals' tools={'LinkedIn'} redirectUrl='https://www.linkedin.com/learning/certificates/448e3c62806824feaa9073f911fd0ffbf9e14ba53277b36f6834aa2d31f88811' />

      </div>
    </div>
  )
}

export default Certific