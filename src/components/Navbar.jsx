import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <>
      <nav className="  bg-dark navbar-dark navbar text-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            ReactRouter
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              openMenu ? 'collapse navbar-collapse' : 'navbar-collapse'
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
