import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext';

const ManageSingleFood = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const { loading } = useContext(MyAuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/manage-single-food/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    if (loading) {
        return <div>Loading Data...</div>
    }

    console.log(data);

    return (
        <div>
            <h1>Your Search food is: {id}</h1>
            {
                data.length !== 0 ?
                    <div>One Request Found</div>
                    : <div>No Request Available</div>
            }
        </div>
    )
}

export default ManageSingleFood