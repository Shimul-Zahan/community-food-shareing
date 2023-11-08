import React, { useState } from 'react'
import { flexRender, useReactTable, getCoreRowModel, createColumnHelper } from '@tanstack/react-table'
import useManageFood from '../Hooks/useManageFood'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const columnHelper = createColumnHelper();
const columns = [
    columnHelper.accessor('foodImage', {
        header: 'Food Image',
    }),
    columnHelper.accessor('foodName', {
        header: 'Food Name',
    }),

    columnHelper.accessor('donatorName', {
        header: 'Donator Name',
    }),

    columnHelper.accessor('quantity', {
        header: 'Quantity',
    }),

    columnHelper.accessor('expiredDate', {
        header: 'Expire Date',
    }),

    columnHelper.accessor('manage', {
        header: 'Manage'
    }),
    columnHelper.accessor('update', {
        header: 'Update'
    }),
    columnHelper.accessor('delete', {
        header: 'Delete'
    })
]


const ReactTable = () => {

    const { data, refetch } = useManageFood();
    const navigate = useNavigate();
    const [food, updatedFood] = useState(null);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const manageFood = (id) => {
        navigate(`/manage-single-food/${id}`)
    }
    const updateFood = (id) => {
        navigate(`/update-single-food/${id}`)
    }
    const deleteFood = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete clicked', id)
                const res = axios.delete(`https://food-shareing-serversite.vercel.app/delete-food/${id}`)
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        <div className='container mx-auto mb-10'>
            {
                data && <table className='w-[200px] lg:w-full'>
                    <thead>
                        {
                            table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className='border-2 h-20'>
                                    {
                                        headerGroup.headers.map(head => <th key={head.id} className='text-lg border-2'>
                                            {
                                                flexRender(head.column.columnDef.header, head.getContext())
                                            }
                                        </th>)
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody className='text-center'>
                        {
                            table.getRowModel().rows.map(row => (
                                <tr key={row.id} className='border-2 h-20 lg:text-lg'>
                                    {

                                        row.getVisibleCells().map(cell => (
                                            cell.column.id === 'foodImage' ?
                                                <td className=''>
                                                    <div className='w-full flex justify-center items-center'>
                                                        <img src={cell.row.original.foodImage} className='h-20 w-20 rounded-full' />
                                                    </div>
                                                </td> :
                                                cell.column.id === 'manage' ?
                                                    <td key={cell.id} className='border-2'>
                                                        <button onClick={() => manageFood(cell.row.original._id)} className='btn bg-green-500'>Manage</button></td> :
                                                    cell.column.id === 'update' ?
                                                        <td key={cell.id} className='border-2 text-2xl text-green-500'>
                                                            <button onClick={() => updateFood(cell.row.original._id)}>
                                                                <FaEdit />
                                                            </button>
                                                        </td> :
                                                        cell.column.id === 'delete' ?
                                                            <td key={cell.id} className='border-1 text-red-500 text-3xl'>
                                                                <button onClick={() => deleteFood(cell.row.original._id)}>
                                                                    <MdDeleteForever />
                                                                </button>
                                                            </td> :
                                                            <td key={cell.id} className='border-2'>
                                                                {/* {console.log(cell.column.columnDef)} */}
                                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            }
        </div>
    )
}

export default ReactTable