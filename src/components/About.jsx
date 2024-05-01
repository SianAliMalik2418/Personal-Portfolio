import React from 'react'
import programmingGif from "../assets/images/programming.gif"
import sianPic from "../assets/images/sian professional pic.jpg"
import sianResume from "../assets/images/Sian_Ali_Malik_Resume.pdf"

function About() {
    return (
        <>
        <div className="items-center justify-center lg:mt-36 hidden lg:flex " data-aos="fade-up">
        <h1 className='text-[1.3rem] font-semibold  mt-6 mb-3 linkItem w-fit text-center  relative md:text-[1.75rem] lg:order-1 text-white dark:text-[#2D2E32] '>About Me</h1>

        </div>

        <div className=' flex flex-col gap-4 items-center justify-center w-full px-5 py-3 mt-36  md:h-fit md:py-20 lg:flex-row lg:mt-0'>
            

            <h1 className='text-[1.3rem] font-semibold text-white dark:text-[#2D2E32] mt-6 mb-3 linkItem  relative md:text-[1.75rem] lg:order-1 lg:hidden'>About Me</h1>

            <div className='w-full flex items-center justify-center my-20 h-52 lg:my-0 rounded-lg md:h-[23rem] lg:w-[80%] lg:order-3'>
                <img src={sianPic} className='object-cover object-center h-[20rem] rounded-full' alt="" />
            </div>

            <div className='flex flex-col items-center justify-center gap-5 text-center text-white dark:text-[#2D2E32] md:px-20 lg:order-2'>
                <h1 className='w-full text-[1.5rem] font-bold text-center md:text-[2rem] '> Front-end Developer
                    based in Lahore, Pakistan 📍</h1>
                <span className='md:text-[1.2rem] md:mt-5'>Hey, my name is Sian, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</span>

                <span className='md:text-[1.2rem] md:mt-5'>My main stack currently is React in combination with Tailwind CSS and JavaScript.</span>

                <a href={sianResume} download="Sian_Ali_Malik_Resume.pdf" target='_blank' className='border-cyan-900  cursor-pointer transition-all font-bold border-2 px-4 py-2 mt-5'>Download Resume ↓</a>
            </div>

        </div>
        </>

    )
}

export default About