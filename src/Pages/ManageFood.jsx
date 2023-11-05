import React from 'react'
import useManageFood from '../Hooks/useManageFood'

const ManageFood = () => {

    const { data, isLoading, refetch } = useManageFood();
    console.log(data);

    return (
        <div>ManageFood</div>
    )
}

export default ManageFood