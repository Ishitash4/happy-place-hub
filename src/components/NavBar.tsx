
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Gamepad, Store, List, Book, Calendar, Settings } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const isOptionsPage = location.pathname === '/options';

  return (
    <nav className="fixed top-0 w-full bg-[#1A1F2C] border-b border-[#403E43] p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {isOptionsPage ? (
          <Link to={location.state?.from || '/'}>
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              ← Back
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              <Home className="w-5 h-5" />
            </Button>
          </Link>
        )}
        
        {!isOptionsPage && (
          <Link to="/options" state={{ from: location.pathname }}>
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
