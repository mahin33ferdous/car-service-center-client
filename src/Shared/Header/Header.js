import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const Header = () => {

    const menuItems = <>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/login'>Log in</Link></li>
    </>
    return (

         <div className="navbar h-20 mb-12 mt-12 bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
        </ul>
      </div>
      <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img width="50" height="50" viewBox="0 0 24 24" src={logo} />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
         {menuItems}
      </ul>
    </div>
    <div className="navbar-end">
    <button className="btn btn-outline btn-warning">Appoinment</button>
  
    </div>
  </div>
  );      
};

export default Header;