import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageSingleFood = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const { loading } = useContext(MyAuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://food-shareing-serversite.vercel.app/manage-single-food/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    if (loading) {
        return <div>Loading Data...</div>
    }

    const approve = async (id, foodId) => {
        const res = axios.patch(`https://food-shareing-serversite.vercel.app/approve-request/${id}`, ({ status: 'delivered', foodId }));
        const data = await res.data;
        if (data.acknowledged) {
            Swal.fire({
                title: "Great Job!!!",
                text: "Food Request Approved",
                icon: "success"
            });
            navigate('/manage-my-food');
        }
    }

    // icon: "warning",

    const dennyRequest = async (id) => {
        const res = axios.patch(`https://food-shareing-serversite.vercel.app/approve-request/${id}`, ({ status: 'rejected', }));
        const data = await (await res).data;
        if (data.acknowledged) {
            Swal.fire({
                title: "Great Job!!!",
                text: "Food Request Approved",
                icon: "warning"
            });
            navigate('/manage-my-food');
        }
    }

    console.log(data)
    return (
        <div className='container mx-auto min-h-screen'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Feeding Neighbour | Manage single food</title>
            </Helmet>
            {
                data.length !== 0 && data?.status == 'available' ?
                    <div>
                        <h1 className='text-center py-5 lg:text-5xl font-bold font-fontSecondary'>Your sharing food is ready for you to Approve or Dennied.</h1>
                        <div className='flex justify-around items-center lg:pt-10'>
                            <div className='flex justify-start items-center gap-10'>
                                <div>
                                    <img src={data?.foodImage} className='lg:w-52 lg:h-52' alt="" />
                                </div>
                                <div className='space-y-3 text-lg'>
                                    <h1 className='font-bold'>Requester Information</h1>
                                    <h1>Name: {data?.requesterName}</h1>
                                    <h1>Email: {data?.userEmail}</h1>
                                    <h1>Request Date: {data?.requestDate}</h1>
                                </div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={data?.requesterImage} />
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-2 text-lg text-white'>
                                <button className='bg-green-600 py-2 px-5 rounded-full'>{data?.status}</button>
                                <button onClick={() => approve(data?._id, data?.foodId)} className='bg-green-600 py-2 px-5 rounded-full'>Approve</button>
                                <button onClick={() => dennyRequest(data?._id)} className='bg-red-600 py-2 px-5 rounded-full'>Dennied</button>
                            </div>
                        </div>
                    </div>
                    : <div className='text-center lg:text-5xl font-bold font-fontSecondary pt-10'>No Request Yet</div>
            }
        </div>
    )
}

export default ManageSingleFood