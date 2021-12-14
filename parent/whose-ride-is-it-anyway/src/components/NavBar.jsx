import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/allparks'>Parks</Link>
        {/* <Link to='/new'>Add</Link> */}
      </div>
    </nav>
  )
}

export default Nav;
