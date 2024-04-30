import React from 'react'
import programmingGif from "../assets/images/programming.gif"


function HeroSection() {




  
  return (
    <div className=' h-screen w-full  flex flex-col lg:flex-row lg:justify-between  lg:gap-3   md:h-fit text-white dark:text-[#2D2E32] '>
      

      <div className=' h-full w-full lg:w-[60%]  md:px-14 lg:px-20  '>
      <div className=' mt-4 pt-20 flex flex-col gap-10 px-5 md:mt-14 lg:pt-0 lg:mt-3  lg:w-fit'>
        <div className='flex items-center gap-2 '>
        <h1 className='text-3xl md:text-4xl'>Hello!</h1>
        <span className='rotate text-3xl md:text-4xl inline-block w-fit h-fit cursor-pointer transition-all '>👋</span>
        </div>
        
        <p className=' text-[1.75rem] leading-[-.5rem] mt-8 md:text-[2rem]  lg:text-[2.3rem] lg:py-4 lg:w-full'>I am <span className='font-bold text-[#40e9ff] dark:text-[#35d3e7]'>Sian Malik,</span> a passionate Front-End <span className='font-bold text-[#40e9ff] dark:text-[#35d3e7]'>React Developer</span> focused on building beautiful interfaces & experiences. </p>
      </div>

      <div className=' px-5 mt-24 text-xl flex flex-col gap-1 justify-center md:text-2xl md:mt-32 lg:mt-14'>
        <h1>Get In touch 👇</h1>
        <h1 className='linkItem relative w-fit'>sianmalik2418@gmail.com</h1>
      </div>
      </div>

      <div className=' hidden lg:flex lg:w-[40%]  items-center justify-center rounded-lg pr-5'>
         <img src={programmingGif} className='object-cover object-center w-full  rounded-lg' alt="" />
      </div>

    </div>
  )
}

export default HeroSection