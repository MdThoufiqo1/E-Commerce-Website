import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <a className="navbar-brand ms-2" >Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <NavLink to='/'>
        <li className="nav-item active nav-link m-3">
          Home
        </li>
        </NavLink>
        <NavLink to='/Product'>
        <li className="nav-item active nav-link m-3">
          Product
        </li>
        </NavLink>
        <NavLink to='/About'>
        <li className="nav-item active nav-link m-3">
          About
        </li>
        </NavLink>
        <NavLink to='/Contect'>
        <li className="nav-item active nav-link m-3">
          Contect
        </li>
        </NavLink>
  
        
      </ul>
      <div className='buttons '>
           <a className='btn btn-outline-dark m-2'>login</a>
           <a className='btn btn-outline-dark m-2'>Register</a>
        </div>
    </div>
  </nav>
      </>
  
)
}

export default Navbar