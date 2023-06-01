import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaLock, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return (
    <div className='mt-0'>
       <Helmet>
                <title>Restaurant | DashBoard </title>
            </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
          {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li><Link to='/dashboard/home'><FaHome />User Home </Link></li>
            <li><Link to='/dashboard/reservation'><FaCalendar /> Reservation  </Link></li>
            <li><Link to='/dashboard/history'><FaWallet />Payment history</Link></li>
            <li><Link to='/dashboard/myCart'><FaShoppingCart />MyCart  </Link></li>
            <div className="divider"></div>
            <li><Link to='/'><FaHome/> Home</Link></li>
            <li><Link to='/menu'><IoIosMenu/> Menu</Link></li>
            <li><Link to='/order'><FaLock/>Order Food</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;