import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function ProjectCard({ projectName, description, repoLink, liveLink , thumbNail,techStacks }) {
    return (
        <div className='projectCard  mt-5 my-10  rounded-lg w-full flex flex-col pb-5  md:mt-14 lg:w-[80%]  lg:flex-row lg:items-center lg:px-2 lg:gap-3 lg:justify-center' data-aos = "fade-right">
            <div className=' w-full h-full    '>
                <img src={thumbNail} className='object-cover object-center  w-full rounded-md md:h-full  ' alt="" />
            </div>

            <div className='projectContent px-5 mt-5 flex flex-col gap-3  md:w-fit '>

                <h1 className='text-2xl font-semibold '>{projectName}</h1>

                 {description}

                <div className='mt-5 flex gap-2 flex-wrap'>
                    {techStacks.map(function(skills,index)
                    {
                        return(
                            <span key={index} className='w-fit  py-1 px-4 border-2 border-zinc-500'>{skills}</span>

                        )
                    })}
                   

                </div>

                <div className='flex gap-2 w-fit mt-4 '>
                    <a href={repoLink} target='_blank' className='flex items-center gap-4 py-1 px-3 border-2 border-zinc-500 rounded-lg cursor-pointer transition-all hover:bg-cyan-500 hover:text-white'>
                        <span>Code</span>
                        <FaGithub  size={20} className='text-white dark:text-black'/>
                    </a>
                    <a href={liveLink} target='_blank' className='flex items-center gap-2 py-1 px-3 border-2 border-zinc-500 rounded-lg cursor-pointer transition-all hover:bg-cyan-500 hover:text-white'>
                        <span>Live</span>
                        <FaLongArrowAltRight  size={20} className='rotate-[-50deg] text-white  dark:text-black'/>
                    </a>


                </div>


            </div>
        </div>
    )
}

export default ProjectCard