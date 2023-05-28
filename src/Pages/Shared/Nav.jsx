import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navOption = <>
    <li>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/order'>Order Food</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Registration</Link>
      
    </li>
       
    </>
    return (
        <div>
            <div className="navbar bg-base-100  fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
        </div>
    );
};

export default Nav;