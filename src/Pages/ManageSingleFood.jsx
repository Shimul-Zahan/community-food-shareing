import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext';

const ManageSingleFood = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const { loading } = useContext(MyAuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/manage-single-food/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    if (loading) {
        return <div>Loading Data...</div>
    }

    return (
        <div className='container mx-auto'>
            {
                data.length !== 0 ?
                    <div>
                        <h1 className='text-center py-5 lg:text-5xl font-bold font-fontSecondary'>Your sharing food is ready for you to Approve or Dennied.</h1>
                        <div className='flex justify-around items-center lg:pt-10'>
                            <div className='flex justify-start items-center gap-10'>
                                <div>
                                    <img src={data?.foodImage} className='lg:w-52 lg:h-52' alt="" />
                                </div>
                                <div className='space-y-3 text-lg'>
                                    <h1>Requester Information</h1>
                                    <h1>Email: {data?.userEmail}</h1>
                                    <h1>Request Date: {data?.requestDate}</h1>
                                </div>
                            </div>
                            <div className='space-x-2 text-lg text-white'>
                                <button className='bg-green-600 py-2 px-5 rounded-full'>{data?.deliverInfo}</button>
                                <button className='bg-green-600 py-2 px-5 rounded-full'>Approve</button>
                                <button className='bg-red-600 py-2 px-5 rounded-full'>Dennied</button>
                            </div>
                        </div>
                    </div>
                    : <div className='text-center lg:text-5xl font-bold font-fontSecondary pt-10'>No Request Yet</div>
            }
        </div>
    )
}

export default ManageSingleFood