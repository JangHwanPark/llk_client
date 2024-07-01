import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log(`toggleMenu : ${showMenu}`);
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2 className="logo">Logo</h2>

        {/* 모바일 대응 */}
        <div className="mobile-menu">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu/>
          </button>
        </div>
      </div>

      <ul className={`nav-menu ${!showMenu ? "active-menu" : ""}`}>
        <li className="nav-item">
          <Link to="/">Buy</Link>
        </li>
        <li className="nav-item">
        <Link to="/">Sell</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Rent</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Land</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>

      {/* Auth Container */}
      <ul className={`auth-container ${!showMenu ? "active-menu" : ""}`}>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}