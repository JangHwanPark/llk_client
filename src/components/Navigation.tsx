import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx";
import {useAuthorization} from "../hooks/useAuthorization";
import {useMutation} from "@tanstack/react-query";

const navbarItems = [
  {label: "Buy", path: '/buy'},
  {label: "Sell", path: '/sell'},
  {label: "Rent", path: '/rent'},
  {label: "About", path: '/about'},
]

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const {accessToken, logout} = useAuthorization();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const mutation = useMutation({
    mutationFn: async () => logout()
  })

  const handleClick = () => mutation.mutate()

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
          <li key={idx} className="nav-item">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Auth Container */}
      <ul className={`nav-menu ${showMenu ? "active-menu" : ""}`}>
        {!accessToken ? (
          <>
            <li className="nav-item"><Link to="/signin">Login</Link></li>
            <li className="nav-item"><Link to="/signup">Register</Link></li>
          </>
        ) : (
          <li className="nav-item"><button onClick={handleClick}>LOGOUT</button></li>
        )}
      </ul>
    </nav>
  );
}
