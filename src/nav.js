import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

const NavBar=()=>(
  <div>
    <NavLink exact activeClassName='bbb' to="/">a</NavLink>&nbsp;
    <NavLink to="/B" activeClassName='bbb'>b</NavLink>&nbsp;
    <NavLink to="/C" activeClassName='bbb'>c</NavLink>&nbsp;
    <NavLink to='/App' activeClassName='bbb'>App</NavLink>
  </div>
)

export default NavBar;
