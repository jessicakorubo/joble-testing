import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  // close menu on ESC and on outside click
  useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  };
  const onClickOutside = (e: MouseEvent) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  window.addEventListener("keydown", onKey);
  window.addEventListener("mousedown", onClickOutside);
  return () => {
    window.removeEventListener("keydown", onKey);
    window.removeEventListener("mousedown", onClickOutside);
  };
}, [isOpen]);


  return (
    <div className="navbar-container" role="banner">
      {/* UPPER NAV */}
      <div className="upper-nav-con">
        <div className="upper-nav">
          <div className="search">
            <div className="search-icon" aria-hidden="true">
              {/* svg kept same */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9167 15.75C17.0694 15.9028 17.1458 16.0972 17.1458 16.3333C17.1458 16.5694 17.0694 16.7639 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99194 11.3044 6.87722 11.6689 7.91667 11.6667Z" fill="white" />
              </svg>
            </div>
            <input aria-label="Search" type="search" placeholder="Search" />
          </div>

          <div className="top-nav-items">
            <a href="">Support</a>
            <a href="">Join</a>
            <a href="">Host</a>
            <a href="https://app.joble.app/auth/get-started">Sign in</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="left-row">
          <div className="icon">
            <img className="joble_logo" src={logo} alt="joble logo" />
          </div>
        </div>

        <div className="center-row">
          <div className="navItems">
            <ul className="main-menu">
              <li className="dropdown">
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Products
                </NavLink>
                <div className="dropdown-menu">
                  <ul>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/solutions">Solutions</NavLink></li>
                    <li><NavLink to="/industries">Industries</NavLink></li>
                  </ul>
                </div>
              </li>
              <li><NavLink to="/use-cases" className={({ isActive }) => (isActive ? "active-link" : "")}>Use Cases</NavLink></li>
              <li><NavLink to="/pricing" className={({ isActive }) => (isActive ? "active-link" : "")}>Pricing</NavLink></li>
              <li><NavLink to="/resources" className={({ isActive }) => (isActive ? "active-link" : "")}>Resources</NavLink></li>
              <li><NavLink to="/live-demo" className={({ isActive }) => (isActive ? "active-link" : "")}>Live Demo</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="right-row">
          <div className="buttons">
            <button className="sales">Contact Sales</button>
            <button className="try_now">Try now for free</button>
          </div>

          {/* hamburger button (always outside upper-nav, visible on mobile) */}
          <button
            type="button"
            className="hamburger"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#07C0EA" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path d="M3 7H21M3 12H21M3 17H21" stroke="#07C0EA" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/use-cases" onClick={closeMenu}>Use Cases</NavLink></li>
          <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
          <li><NavLink to="/resources" onClick={closeMenu}>Resources</NavLink></li>
          <li><NavLink to="/live-demo" onClick={closeMenu}>Live Demo</NavLink></li>
        </ul>

        <div className="mobile-buttons">
          <button className="sales" onClick={closeMenu}>Contact Sales</button>
          <button className="try_now" onClick={closeMenu}>Try now for free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
