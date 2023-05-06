import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="cover" >
      <NavLink
        className={( {isActive} ) => ( isActive ? 'active' : 'inactive')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={( {isActive} ) => ( isActive ? 'active' : 'inactive')}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={( {isActive} ) => ( isActive ? 'active' : 'inactive')}
        to="/page"
      >
        Page
      </NavLink>
    </div>
  );
};

export default Navigation