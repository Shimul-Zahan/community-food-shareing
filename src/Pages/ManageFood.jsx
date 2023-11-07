import { React, useContext } from 'react'
import ReactTable from '../Components/ReactTable';
import { MyAuthContext } from '../Context/AuthContext';

const ManageFood = () => {

    const { user } = useContext(MyAuthContext);

    return (
        <div className='container mx-auto min-h-screen'>
            <h1 className='text-center lg:text-5xl font-fontSecondary font-bold my-10'>Hello Mr. {user?.displayName } here your all shared food.</h1>
            <ReactTable />
        </div>
    )
}

export default ManageFood