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
import UpdateFood from '../Pages/UpdateFood';
import PrivateRoute from '../Context/PrivateRoute';

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
                element: <PrivateRoute><SingleFood /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-shareing-serversite.vercel.app/view-details/${params.id}`),
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/manage-my-food',
                element: <PrivateRoute><ManageFood /></PrivateRoute>
            },
            {
                path: '/manage-single-food/:id',
                element: <PrivateRoute><ManageSingleFood /></PrivateRoute>,
            },
            {
                path: '/update-single-food/:id',
                element: <PrivateRoute><UpdateFood /></PrivateRoute>,
            },
            {
                path: '/my-food-request',
                element: <PrivateRoute><RequestedFood /></PrivateRoute>
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