import React from 'react';
import { link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to=''>Home</Link>
        <Link to=''>Parks</Link>
        <Link to=''>Add</Link>
      </div>
    </nav>
  )
}

export default Nav;
