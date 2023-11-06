import React from 'react'
import useManageFood from '../Hooks/useManageFood'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const ManageFood = () => {

    const { data, isLoading, refetch } = useManageFood();
    console.log(data);

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table text-lg">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-green-600'>
                            <th>Food Details</th>
                            <th>My Information</th>
                            <th>Food Status</th>
                            <th>Manage Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map(food =>
                                <tr key={food?._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={food?.foodImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{food?.foodName }</div>
                                                <div className="text-sm opacity-90">Quantity: {food?.quantity }</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='text-lg font-fontPrimary'>{food?.donatorName }</span>
                                        <br />
                                        <h1 className="badge badge-ghost badge-sm">{food?.donorEmail }</h1>
                                    </td>

                                    <td className='text-red-600 font-bold'>{food?.expiredDate }</td>

                                    <th>
                                        <button className="btn btn-ghost btn-lg">
                                            <FaEdit className='text-2xl' />
                                        </button>
                                        <button className="btn btn-ghost btn-lg">
                                            <MdDeleteForever className='text-2xl text-red-500' />
                                        </button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    )
}

export default ManageFood