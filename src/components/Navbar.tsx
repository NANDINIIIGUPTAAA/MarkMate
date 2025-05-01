
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          Grade<span className="font-extrabold">ASSIST</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/demo" className="hover:text-gray-600 transition-colors">Request a demo</Link>
        <Link to="/product" className="hover:text-gray-600 transition-colors">Product</Link>
        <Link to="/students" className="hover:text-gray-600 transition-colors">Students</Link>
        <Link to="/login" className="hover:text-gray-600 transition-colors">Login</Link>
        <Button className="bg-dark1 text-white hover:bg-opacity-80 px-5 py-2 rounded-lg">
          Get GradeASSIST Free
        </Button>
      </div>
      
      <div className="md:hidden">
        <Button variant="ghost" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
