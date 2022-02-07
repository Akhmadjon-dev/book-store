import React from 'react';
import './Nav.css'
import '../../App.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <div className="container">
            <div className="nav__logo">Badiyat</div>
            <ul className="nav__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/home/books">Books</Link>
                </li>
                <li>
                  <Link to="/home/authors">Authors</Link>
                </li>
                <li>
                  <Link to="/form" >Form</Link>
                </li>
                <li>
                  profile
                </li>
            </ul>

        </div>
    </nav>
  ) 
}

export default Nav;
