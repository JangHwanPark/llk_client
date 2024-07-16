import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx";

const navbarItems = [
  {label: "Buy", path: '/'},
  {label: "Sell", path: '/'},
  {label: "Rent", path: '/'},
  // {label: "Land", path: '/'},
]

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log(`toggleMenu : ${showMenu}`);
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <Link to={'/'}>
          <h2 className="logo">HoJung Land</h2>
        </Link>

        {/* 모바일 대응 */}
        <div className="mobile-menu">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu/>
          </button>
        </div>
      </div>

      <ul className={`nav-menu ${showMenu ? 'active-menu' : ''}`}>
        {navbarItems.map((item, idx) => (
          <li key={idx} className="nav-item" onClick={() => {
            alert("준비중 입니다.")
          }}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
        <li className="nav-item">
          <Link to='/about'>About</Link>
        </li>
      </ul>

      {/* Auth Container */}
      <ul className={`auth-container ${showMenu ? "active-menu" : ""}`}>
      <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Register</Link></li>
      </ul>
    </nav>
  );
}
