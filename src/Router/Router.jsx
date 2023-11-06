import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import AvailavleFoods from '../Pages/AvailableFoods';
import AddFood from '../Pages/AddFood';
import Error from '../Pages/Error';
import SingleFood from '../Pages/SingleFood';
import RequestedFood from '../Pages/RequestedFood';
import ManageFood from '../Pages/ManageFood';
import ManageSingleFood from '../Pages/ManageSingleFood';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/available-food',
                element: <AvailavleFoods />
            },
            {
                path: '/view-details/:id',
                element: <SingleFood />,
                loader: ({ params }) => fetch(`http://localhost:5000/view-details/${params.id}`),
            },
            {
                path: '/add-food',
                element: <AddFood />
            },
            {
                path: '/manage-my-food',
                element: <ManageFood />
            },
            {
                path: '/manage-single-food/:id',
                element: <ManageSingleFood />,
                // loader: ({ params }) => fetch(`http://localhost:5000/manage-single-food/${params.id}`),
                // loader: ({ params }) => fetch(`http://localhost:5000/manage-single-food/{params.id}`)
            },
            {
                path: '/my-food-request',
                element: <RequestedFood />
            },
            {
                path: '/sign-up',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
        ]
    },
])

export default router