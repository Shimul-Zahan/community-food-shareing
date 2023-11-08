import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useFeaturesFoods = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["features-foods"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/all-foods', {withCredentials: true})
            return await res.data;
        }
    })

    return {data , isError, isLoading, refetch}
}

export default useFeaturesFoods