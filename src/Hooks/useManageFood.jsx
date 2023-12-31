import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'

const useManageFood = () => {

    const { user } = useContext(MyAuthContext);

    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: !!user?.email,
        queryKey: ["Manage Food"],
        queryFn: async () => {
            const res = await axios.get(`https://food-shareing-serversite.vercel.app/manage-foods?email=${user?.email}`, {withCredentials: true})
            return await res.data;
        }
    })

    return { data, isLoading, refetch };
}

export default useManageFood