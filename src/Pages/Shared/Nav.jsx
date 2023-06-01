import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContest } from '../../Auth/AuthProvider';
import UseCart from '../../Main/UseCart';

const Nav = () => {
  const { user, logOut } = useContext(AuthContest);
  const [carts] =UseCart();

  const handleOut = () => {
    logOut()
      .then(result =>
        console.log(result)
      )
      .catch(err =>
        console.log(err.message)
      )
  }
  const navOption = <>
    <li>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/order'>Order Food</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Registration</Link>

      <Link to='/dashboard'>
        <button className="btn gap-2">
          Cart
          <div className="badge badge-secondary">+{carts?.length || 0}</div>
        </button>
      </Link>
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
          <a className="btn btn-ghost normal-case text-xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>

        <div className="navbar-end rounded-lg	">
          {
            user ?
              (<button onClick={handleOut} className='bg-black p-3 rounded-xl font-semibold border border-indigo-600'>Log Out
              </button>) :
              (<Link to='/login' className='bg-white p-3 rounded-xl font-semibold border border-indigo-600 text-red-600'>Login</Link>)
          }
          {/* {
          user?
          (<button onClick={handleOut} className='bg-green-500 m-5'>LogOut
            <span><img className='rounded-full w-1/3 ml-4 justify-end' src={user?.photoURL}></img> </span> </button>):
          (<Link to='/login' className='bg-green-500 m-5 rounded p-3 text-white font-bold'>Login</Link>)
        } */}

        </div>
      </div>
    </div>
  );
};

export default Nav;