import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <li><NavLink to="/" exact>Home</NavLink></li>
    <li><NavLink to="/movies"
    </div>
  );
};

export default NavBar;
