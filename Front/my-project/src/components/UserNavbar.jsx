import React from 'react'
import { NavLink } from 'react-router';


function UserNavbar() {
  return (
    <div className="navbar flex justify-around py-5">
        <div className="nav_left">
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="nav_right">
            <ul className='flex gap-5'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">Add</NavLink></li>
                <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>        
    </div>
  )
}

export default UserNavbar
