import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useSingleFood = () => {
    const { data } = useQuery({
        queryKey: ["SingleFood"],
        queryFn: async () => {
            const res = await axios.get('')
        }
    })
}

export default useSingleFood