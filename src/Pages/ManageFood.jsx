import { React, useContext } from 'react'
import ReactTable from '../Components/ReactTable';
import { MyAuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';

const ManageFood = () => {

    const { user } = useContext(MyAuthContext);

    return (
        <div className='container mx-auto min-h-screen'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Feeding Neighbour | Manage Food</title>
            </Helmet>
            <h1 className='text-center lg:text-5xl font-fontSecondary font-bold my-10'>Hello Mr. {user?.displayName } here your all shared food.</h1>
            <ReactTable />
        </div>
    )
}

export default ManageFood