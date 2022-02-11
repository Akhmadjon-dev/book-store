import React from 'react';
import './Nav.css'
import '../../App.css'
import { Link } from 'react-router-dom';

function Nav() {

  const user = localStorage.getItem('user')

  const signOutHandler = () => {
    localStorage.clear()
    window.location = ('/')
  }

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
                <li className="nav__forum">
                  <p>Forum</p>
                  <div className="nav__forum-links">
                    <Link to="/add-book" >add book</Link>
                    <Link to="/add-author" >add author</Link>
                  </div>
                </li>
                <li>
                  profile
                </li>
                <li>
                  {
                    (user) && <button onClick={signOutHandler}>Sign out</button>
                  }
                </li>
            </ul>

        </div>
    </nav>
  ) 
}

export default Nav;
