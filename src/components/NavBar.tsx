
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Settings } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const isOptionsPage = location.pathname === '/options';

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {isOptionsPage ? (
          <Link to={location.state?.from || '/'}>
            <Button variant="ghost" className="text-foreground nav-item">
              ← Back to Journey
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button variant="ghost" className="text-foreground nav-item">
              <Home className="w-5 h-5" />
            </Button>
          </Link>
        )}
        
        {!isOptionsPage && (
          <Link to="/options" state={{ from: location.pathname }}>
            <Button variant="ghost" className="text-foreground nav-item">
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
