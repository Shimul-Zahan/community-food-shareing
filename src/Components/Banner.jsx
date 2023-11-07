import React from 'react'
import bgImage from '../assets/images/Feeding-Families-mother-and-daughter.png'
import Lottie from "lottie-react";
import animation from '../assets/images/theme-animation.json'

const Banner = () => {
  return (
    <div className='min-h-screen relative -mt-[96px] -z-20 bg-black bg-blend-overlay bg-opacity-50' style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover' }}>
      <div className='container mx-auto flex justify-start h-screen items-center font-fontPrimary font-bold text-7xl text-white'>
        <div className='flex flex-col justify-between items-center w-full'>
          <h1 className='text-2xl md:text-4xl lg:text-7xl mt-40'>Working Together,
            <br />
            To Feed Our
            <br />
            Neighbors
          </h1>
          <div className=''>
            <Lottie animationData={animation} className='h-[300px] lg:h-[500px]'></Lottie>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner