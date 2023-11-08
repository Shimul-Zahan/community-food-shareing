import React from 'react'
import useFeaturesFoods from '../Hooks/useFeaturesFoods'
import { Link } from 'react-router-dom';

const FeaturedFood = () => {

  const { data, isError, isLoading, refetch } = useFeaturesFoods();
  // console.log(data[0])

  if (isLoading) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-accent"></span>
      <span className="loading loading-spinner text-neutral"></span>
    </div>
  }

  return (
    <div className='my-20 container mx-auto'>
      <div className='flex justify-center items-between container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-x-32'>
          {
            data?.slice(0, 6)?.map(food =>
              <div key={food?._id} class="py-20 container mx-auto">
                <div className="card card-compact bg-green-500 shadow-xl text-black">

                  <div className='hover:opacity-100'>
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

                    <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                      <button className="bg-green-600 text-white py-3 px-6 rounded-full text-xl font-fontSecondary">
                        <Link to={`/view-details/${food?._id}`}>View Details</Link>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className='text-center'>
        <Link to='/available-food'>
          <button className='btn bg-green-600 hover:bg-green-600 px-6 py-2'>Show All</button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedFood