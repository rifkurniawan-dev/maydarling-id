import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuBtn = document.getElementById('menuBtn');
      const dropdown = document.getElementById('dropdownMenu');
      if (
        menuBtn &&
        dropdown &&
        !menuBtn.contains(e.target) &&
        !dropdown.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm px-3 py-2 d-flex justify-content-between align-items-center">
      {/* Ganti tulisan jadi gambar logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Maydarling Logo"
          style={{ height: '40px', objectFit: 'contain' }}
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="d-none d-md-flex gap-3 fs-5">
         <Link to="/" className="nav-link px-2 py-1 rounded hover-bg-light">
          Home
        </Link>
        <Link to="/article" className="nav-link px-2 py-1 rounded hover-bg-light">
          Article
        </Link>
        <Link to="/trashscan" className="nav-link px-2 py-1 rounded hover-bg-light">
          Trashscan
        </Link>
        <Link to="/event" className="nav-link px-2 py-1 rounded hover-bg-light">
          Event
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="d-md-none position-relative">
        <button
          id="menuBtn"
          aria-label="Toggle menu"
          className="btn btn-light p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="bi bi-list"
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12.5a.5.5 0 010-1h11a.5.5 0 010 1h-11zm0-4a.5.5 0 010-1h11a.5.5 0 010 1h-11zm0-4a.5.5 0 010-1h11a.5.5 0 010 1h-11z"
            />
          </svg>
        </button>

        <div
          id="dropdownMenu"
          className={`position-absolute end-0 mt-2 bg-white border rounded shadow ${
            menuOpen ? 'd-block' : 'd-none'
          }`}
          style={{ width: '10rem', zIndex: 1050 }}
        >
          
           <Link
            to="/"
            className="d-block px-3 py-2 text-decoration-none text-dark"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            About
          </Link>
          <Link
            to="/article"
            className="d-block px-3 py-2 text-decoration-none text-dark"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            Article
          </Link>
          <Link
            to="/trashscan"
            className="d-block px-3 py-2 text-decoration-none text-dark"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            Trashscan
          </Link>
          <Link
            to="/event"
            className="d-block px-3 py-2 text-decoration-none text-dark"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            Event
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
