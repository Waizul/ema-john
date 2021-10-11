import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import Logo from './../logo.png'
const Nav = () => {
    const activeStyle={
    fontWeight: "bold",
    color: "red"
  }

    return (
		<div className='nav-container'>
            <Link to = '/shop' id='logo-link'><img src={Logo} alt="" /></Link>
            
			<nav className='nav'>
				<NavLink activeStyle={activeStyle} to='/shop'>Shop</NavLink>
				<NavLink activeStyle={activeStyle} to='/order'>Order Review</NavLink>
				<NavLink activeStyle={activeStyle} to='/inventory'>Manage Inventory</NavLink>
			</nav>
		</div>
	);
};

export default Nav;