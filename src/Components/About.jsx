import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center mx-auto container p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
       <h2 className='mb-2 font-bold sm:text-4xl text-2xl'>About <span className='font-light underline underline-offset-4 decoration-1 under ' >Our Brand</span></h2>
       <p className='text-gray-500  text-center max-w-80 mb-8'>Passionate About Properties, Dedicated to Your Vision </p>
       <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} className='sm:w-1/2 w-full max-w-lg' alt="img" />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

          <div>
            <p className='font-medium text-4xl text-gray-800'>10+</p>
            <p className='font-light text-gray-500'>Years of Experience</p>
          </div>
          <div>
            <p className='font-medium text-4xl text-gray-800'>12+</p>
            <p className='font-light text-gray-500'>Projects Completed</p>
          </div>
          <div>
            <p className='font-medium text-4xl text-gray-800'>20+</p>
            <p className='font-light text-gray-500'>Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <p className='font-medium text-4xl text-gray-800'>25+</p>
            <p className='font-light text-gray-500'>Ongoing Projects</p>
          </div>
        </div>
        <p className='max-w-lg my-10'>Real Estate offers exceptional property solutions, specializing in buying, selling, and renting homes and commercial spaces. Trusted for professionalism, personalized service, and market expertise to meet every client’s needs.</p>
        <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>

        </div>
       </div>
       
       
    </motion.div>
  )
}

export default About
