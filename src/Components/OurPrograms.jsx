import React from 'react'
import imag1 from '../assets/images/our-programs/dont_waste_food.jpg'
import imag2 from '../assets/images/our-programs/close-up-people-getting-food-donations.jpg'
import imag3 from '../assets/images/our-programs/holding-schematic-meal-plan-diet-with-various-healthy-products-background.jpg'

const OurPrograms = () => {
    return (
        <div className='my-5 lg:my-20 px-5'>
            <h1 className='text-2xl lg:text-7xl font-fontSecondary font-bold my-10 text-center'>Somr Of Our Programs</h1>
            <div className='flex justify-center items-center gap-10'>
                <div className='container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3 justify-center items-center '>
                    <div className="card card-compact w-96 shadow-xl text-black">

                        <div className='hover:opacity-100'>
                            <div className='relative'>
                                <figure>
                                    <img src={imag1} className='rounded-t-xl h-64 w-full' />
                                </figure>
                            </div>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-fontSecondary">Food Waste Awareness Campaign</h2>
                                <div className=''>
                                    <p className='text-2xl font-fontSecondary'>Raise awareness about food waste and its impact on the community. Host workshops, seminars, or events that focus on reducing food waste at both the individual and community</p>
                                </div>
                            </div>
                            <button className='btn bg-green-600 font-thin capitalize text-lg mx-4 my-2'>See more similar events...</button>
                        </div>

                    </div>
                    <div className="card card-compact w-96 shadow-xl text-black">

                        <div className='hover:opacity-100'>
                            <div className='relative'>
                                <figure>
                                    <img src={imag2} className='rounded-t-xl h-64 w-full' />
                                </figure>
                            </div>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-fontSecondary">Food Swap</h2>
                                <div className=''>
                                    <p className='text-2xl font-fontSecondary'>Organize a food swap event where individuals can exchange homegrown produce, homemade goods, or surplus items. This promotes community sharing and reduces food waste</p>
                                </div>
                            </div>
                            <button className='btn bg-green-600 font-thin capitalize text-lg mx-4 my-2'>See more similar events...</button>
                        </div>

                    </div>
                    <div className="card card-compact w-96 shadow-xl text-black">

                        <div className='hover:opacity-100'>
                            <div className='relative'>
                                <figure>
                                    <img src={imag3} className='rounded-t-xl h-64 w-full' />
                                </figure>
                            </div>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-fontSecondary">Nutrition Education Sessions</h2>
                                <div className=''>

                                    <p className='text-2xl font-fontSecondary'>Offer workshops or seminars on nutrition, emphasizing the importance of a balanced diet and how to make healthy food choices on a budge</p>

                                </div>
                            </div>
                            <button className='btn bg-green-600 font-thin capitalize text-lg mx-4 my-2'>See more similar events...</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OurPrograms