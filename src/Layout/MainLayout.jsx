import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './navlink.css'
import logo from '../assets/images/logo.png'
import { MyAuthContext } from '../Context/AuthContext'

const MainLayout = ({ children }) => {

    const { user, logOut } = useContext(MyAuthContext);
    const logOutUser = () => {
        logOut()
            .then(res => console.log('successfully Logout User'))
            .then(err => console.log(err));
    }

    // console.log(user)

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-green-800 text-white text-lg">
                    <div className='w-full container mx-auto'>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <div className='flex justify-start items-center'>
                                <img src={logo} alt="" className='h-20' />
                                <div className='h-12 w-[4px] bg-white mr-2'></div>
                                <h1 className='text-2xl font-bold text-green-600'>FEEDING<br/>NEIGHBOUR</h1>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <div className="menu menu-horizontal flex justify-center items-center gap-10 text-xl font-fontPrimary">
                                {/* Navbar menu content here */}
                                <NavLink to='/'>
                                    <button>Home</button>
                                </NavLink>
                                <NavLink to='/available-food'>
                                    <button>Available Food</button>
                                </NavLink>
                                <NavLink to='/add-food'>
                                    <button>Add Food</button>
                                </NavLink>
                                <NavLink to='/manage-my-food'>
                                    <button>Manage-My-Food</button>
                                </NavLink>
                                <NavLink to='/my-food-request'>
                                    <button>My Food Request</button>
                                </NavLink>
                                {
                                    user ? <Link onClick={logOutUser}>
                                        <button>Log Out</button>
                                    </Link> :
                                    <NavLink to='/sign-up'>
                                        <button>Sign In</button>
                                    </NavLink>
                                }
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full space-y-5 bg-green-600">
                    {/* Sidebar content here */}
                    <NavLink to='/'>
                        <button>Home</button>
                    </NavLink>
                    <NavLink to='/available-food'>
                        <button>Available Food</button>
                    </NavLink>
                    <NavLink to='/add-food'>
                        <button>Add Food</button>
                    </NavLink>
                    <NavLink to='/manage-my-food'>
                        <button>Manage-My-Food</button>
                    </NavLink>
                    <NavLink to='/my-food-request'>
                        <button>My Food Request</button>
                    </NavLink>
                    {
                        user ? <Link onClick={logOutUser}>
                            <button>Log Out</button>
                        </Link> :
                        <NavLink to='/sign-up'>
                            <button>Sign In</button>
                        </NavLink>
                    }
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout