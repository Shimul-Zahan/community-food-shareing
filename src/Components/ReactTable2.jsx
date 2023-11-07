import React from 'react'
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table'
import useManageFood from '../Hooks/useManageFood'

const ReactTable = () => {

    const { data } = useManageFood();
    console.log(data);
    const columns = [
        // {
        //     id: 1,
        //     header: 'ID',
        //     accessorKey: 'id',
        //     cell: (props) => <p>{ props.getValue() }</p>
        // },
        {
            id: 2,
            header: 'Food Image',
            accessorKey: 'food_image',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 3,
            header: 'Food Name',
            accessorKey: 'food_name',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 4,
            header: 'Quantity',
            accessorKey: 'quantity',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 5,
            header: 'Pickup Loaction',
            accessorKey: 'Expire_Date',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 6,
            header: 'Status',
            accessorKey: 'status',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 7,
            header: 'Manage',
            accessorKey: 'manage',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 8,
            header: 'Update',
            accessorKey: 'update',
            // cell: (props) => <p>{props.getValue()}</p>
        },
        {
            id: 9,
            header: 'Delete',
            accessorKey: 'delete',
            // cell: (props) => <p>{props.getValue()}</p>
        }
    ]


    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    })



    return (
        <div>
            <h1>ReactTable</h1>
            <table>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => <th key={header.id}>
                                    {/* { console.log(header.column.columnDef.header) } */}
                                    {
                                        flexRender(header.column.columnDef.header, header.getContext())
                                    }
                                </th>
                                )
                            }
                        </tr>
                    ))
                }

                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <td>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ReactTable