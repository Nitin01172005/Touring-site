import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets';
import { motion } from "motion/react"



const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardstoShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if(window.innerWidth >= 1024) {
        setCardstoShow(projectsData.length)
      }else{
        setCardstoShow(1)
      };}
      updateCardsToShow();

      window.addEventListener('resize', updateCardsToShow);
      return ()=> window.removeEventListener('resize', updateCardsToShow)

  },[])

  const nextProject = () => {
    setCurrentIndex((prevIndex)=> (prevIndex + 1)%projectsData.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex)=> prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className='container overflow-hidden md:px-20 w-full my-20 lg:px-32 mx-auto' id='Projects'>
      <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2 '>Projects <span className='font-light underline underline-offset-4 under decoration-1'>Completed</span></h1>
      <p className='text-gray-500 mx-auto text-center max-w-80'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      {/* sidebar-button */}

      <div className='flex mb-8 justify-end items-center'>
        <button onClick={prevProject}
        className='bg-gray-200 p-2 mr-2 rounded ' alt="previous" aria-label='Previous Project' >
          <img src={assets.left_arrow} />
        </button>
        <button onClick={nextProject}
        className='bg-gray-200 p-2 mr-2 rounded ' alt="next" aria-label='Next Project' >
          <img src={assets.right_arrow} />
        </button>
      </div>
      {/* project-slider-container*/}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
          {projectsData.map((project,index)=> (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'> 
              <img src={project.image} alt={project.tile} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                <div className='inline-block bg-white w-3/4 px-4 py-2 md:shadow'>
                    <h2 className='text-xl font-semibold text-gray-800'>
                      {project.title}
                      </h2>
                      <p className='text-gray-500 text-sm'>
                        {project.price} <span className='px-1'>|</span> {project.location}
                      </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
