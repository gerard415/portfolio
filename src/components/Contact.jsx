
import React from 'react'

const Contact = () => {
  return (
    <div  className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f20eae9f-47a5-409f-90d5-c6b881d85286" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4'>Contact Me</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - chinedumike85@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact