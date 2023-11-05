import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'

const useManageFood = () => {

    const { user } = useContext(MyAuthContext);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["Manage Food"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/manage-foods?email=${user?.email}`)
            return await res.data;
        }
    })

    return { data, isLoading, refetch };
}

export default useManageFood