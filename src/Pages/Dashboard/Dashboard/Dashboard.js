import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';



const Dashboard = () => {

    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile py-8">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                {/* <!-- Page content here --> */}
                <h1 className='text-3xl font-bold text-secondary text-center'>Welcome to Dashboard</h1>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}

                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        admin ? '' : <>
                            <li><Link to="/dashboard/orders">My Orders</Link></li>
                            <li><Link to="/dashboard/review">Add a Review</Link></li>
                        </>
                    }

                    {admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/manage">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/add">Add a Product</Link></li>
                        <li><Link to="/dashboard/products">Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;