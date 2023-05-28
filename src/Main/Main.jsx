import React from 'react';
import Nav from '../Pages/Shared/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div className='mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer> }        
            </div>
    );
};

export default Main;