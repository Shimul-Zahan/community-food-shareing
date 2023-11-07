import React, { useContext } from 'react'
import useMyFoodRequest from '../Hooks/useMyFoodRequest'
import { MyAuthContext } from '../Context/AuthContext';

const RequestedFood = () => {

    const { data, isLoading, refetch } = useMyFoodRequest();
    const { user } = useContext(MyAuthContext);
    // console.log(data)
    if (isLoading) {
        return <div>Loading Data...</div>
    }

    return (
        <div>
            <h1 className='text-center text-5xl font-fontSecondary font-bold my-10'>Hello Mr. {user?.displayName} here your all shared food.</h1>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10'>
                {
                    data?.map(food =>
                        <div className='flex justify-start flex-col lg:flex-row items-center gap-5 border-2 rounded-sm px-2'>
                            <img src={food?.foodImage} className='lg:h-40 lg:w-40 rounded-sm' alt="" />
                            <div className='flex justify-between gap-20 items-center'>
                                <div className='lg:text-lg font-fontPrimary space-y-3'>
                                    <h1>Donar Name: {food?.donorName}</h1>
                                    <h1>Pickup Location: {food?.pickUpLocation}</h1>
                                    <h1 className='text-red-600'>Expired Date: {food?.expiredDate}</h1>
                                    <h1>Requested Date: {food?.requestDate}</h1>
                                </div>
                                <div className='space-y-3 lg:text-lg'>
                                    <h1 className={`${food?.status === 'available' ? 'text-green-600': 'text-red-600'} font-bold`}>Status: {food?.status}</h1>
                                    <button className='btn btn-warning text-base bg-red-500 text-white font-thin capitalize'>Cancel Request</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default RequestedFood