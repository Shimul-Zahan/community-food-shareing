import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'

const useMyFoodRequest = () => {

    const { user } = useContext(MyAuthContext);
    console.log(user?.email)

    const { data, isLoading, refetch } = useQuery({
        enabled: !!user?.email,
        queryKey: ["Request Food"],
        queryFn: async () => {
            const res = await axios.get(`https://food-shareing-serversite.vercel.app/requested-foods?email=${user?.email}`, {withCredentials: true});
            return await res.data;
        }
    })

    return { data, isLoading, refetch }
}

export default useMyFoodRequest
