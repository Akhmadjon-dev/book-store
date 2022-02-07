import React from 'react';
import './Nav.css'
import '../../App.css'

function Nav() {
  return (
    <nav>
        <div className="container">
            <div className="nav__logo">Badiyat</div>
            <ul className="nav__links">
                <li>Home</li>
                <li>Nasr</li>
                <li>Nazm</li>
                <li>Articles</li>
                <li>Forum</li>
            </ul>
        </div>
    </nav>
  ) 
}

export default Nav;
