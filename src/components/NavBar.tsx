
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const isOptionsPage = location.pathname === '/options';

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {isOptionsPage ? (
          <Link to={location.state?.from || '/'} className="nav-item">
            <button>← Back to Journey</button>
          </Link>
        ) : (
          <Link to="/" className="nav-item">
            <button><Home size={20} /></button>
          </Link>
        )}
        
        {!isOptionsPage && (
          <Link to="/options" state={{ from: location.pathname }} className="nav-item">
            <button><Settings size={20} /></button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
