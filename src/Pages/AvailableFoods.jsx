import React, { useEffect, useState } from 'react'
import useFeaturesFoods from '../Hooks/useFeaturesFoods'
import { Link, useNavigate } from 'react-router-dom';
import banner from '../assets/images/diverse-people-shoot.jpg'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AvailavleFoods = () => {

    const { data, isError, isLoading, refetch } = useFeaturesFoods();
    const [foods, setFoods] = useState();
    const [input, setInput] = useState('');

    useEffect(() => {
        setFoods(data)
    }, [isLoading])

    // console.log(foods)

    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }

    const search = async (e) => {
        const res = await axios.get(`https://food-shareing-serversite.vercel.app/avaiable-foods?search=${input}`)
        setFoods(res.data);
        setInput('');

    }

    const handleSort = async (e) => {
        const res = await axios.get(`https://food-shareing-serversite.vercel.app/avaiable-food?sort=${e.target.value}`)
        setFoods(res.data);
    }

    return (
        <div className='mb-20'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Feeding Neighbour | Available Foods</title>
            </Helmet>
            <div className='relative'>
                <img src={banner} alt="" className='w-full lg:h-[500px] opacity-100' />
                <h1 className='lg:text-7xl text-white font-fontPrimary font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Available food Here</h1>
            </div>

            <div className='flex justify-center items-center gap-5'>
                <div className='text-center mt-10 h-12 w-full lg:w-[500px] relative border-2 border-black rounded-2xl'>
                    <BiMicrophone className='absolute top-2 left-2 text-3xl cursor-pointer' />
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Type any food name here...' className='h-11 rounded-2xl lg:w-[495px] px-16 border-none outline-none' />
                    <AiOutlineSearch onClick={search} className='absolute top-2 right-2 text-3xl z-10 cursor-pointer' />
                </div>
                <div className='mt-10'>
                    <select onChange={handleSort} className="select select-bordered border-black w-full max-w-xs text-lg">
                        <option disabled selected>Sort by</option>
                        <option value='descending'>Descending</option>
                        <option value='ascending'>Ascending</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center items-between container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-32'>
                    {
                        foods?.map(food =>
                            food?.status === 'available' &&
                            <div key={food?._id} class="py-20 container mx-auto">
                                <div className="card card-compact bg-green-500 shadow-xl text-black">

                                    <div className='relative'>
                                        <figure>
                                            <img src={food?.foodImage} className='rounded-t-xl h-64 w-full' />
                                        </figure>
                                        <h1 className='absolute top-2 right-2 bg-green-600 h-8 w-8 flex justify-center items-center rounded-full'>{food?.quantity}</h1>
                                    </div>
                                    <div className="card-body relative">
                                        <h2 className="card-title text-3xl font-fontSecondary">{food?.foodName}</h2>
                                        <div className=''>
                                            <div className="avatar absolute -top-10 bg-white rounded-full p-1 right-2">
                                                <div className="w-16 rounded-full">
                                                    <img src={food?.donatorImage} />
                                                </div>
                                            </div>
                                            <h1 className='text-start text-2xl font-fontSecondary'>Donar: {food?.donatorName}</h1>

                                            <div className='text-2xl font-fontSecondary'>
                                                <h1>Location: {food?.pickupLocation}</h1>
                                                <h1>Expire Date: {food.expiredDate}</h1>
                                            </div>

                                            <p className='text-2xl font-fontSecondary'>Notes: {food?.additionalNotes}</p>

                                        </div>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                                        <button className="bg-green-600 text-white py-3 px-6 rounded-full text-xl font-fontSecondary">
                                            <Link to={`/view-details/${food?._id}`}>View Details</Link>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* <div className='text-center'>
            </div> */}
        </div>
    )
}

export default AvailavleFoods