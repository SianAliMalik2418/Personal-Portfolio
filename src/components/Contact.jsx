import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className='h-screen w-screen mt-20 flex flex-col items-center justify-center gap-10 px-2'>
       <h1 className='text-2xl font-semibold text-white dark:text-[#2D2E32] md:text-4xl'> Don't be shy! Hit me up! 👇</h1>
       <p className='text-center text-white dark:text-[#2D2E32] md:text-xl md:px-10 lg:w-[60%]'>I'm currently looking for opportunities. Whether its a Full-Time Job or a Freelance work. Send me a message, I'll try to get back to you as soon as possible.</p>
       <div className='flex gap-5 mt-5'>
           <a  href='https://www.linkedin.com/in/sianalimalik/' target='_blank' className='flex items-center hover:bg-cyan-400 transition-all cursor-pointer gap-4 py-3 px-4 border-2 border-zinc-600 text-white dark:text-[#2D2E32] md:px-6 md:py-4 md:text-xl'>
              <h1 className='font-medium'>Say Hello</h1>
              <FaLinkedin size={25}/>
             
           </a>

           <a href="https://wa.me/923020010923" target="_blank" className='flex items-center hover:bg-cyan-400 cursor-pointer transition-all gap-3 py-3 px-4 border-2 border-zinc-600 text-white dark:text-[#2D2E32] md:px-6 md:py-4 md:text-xl'>
           <h1 className='font-medium'>Say Hello</h1>
           <FaWhatsapp size={25}/>
           

           </a>
       </div>
        </div>
  )
}

export default Contact