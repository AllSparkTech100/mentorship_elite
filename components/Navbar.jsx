import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to determine link classes based on active state
  const getNavLinkClass = ({ isActive }) =>
    `transition-all duration-200 text-[15px] font-medium ${
      isActive 
        ? "text-blue-600" 
        : "text-slate-600 hover:text-blue-600"
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `block text-base font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#2b63d9] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-bl-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Mentorship Pro
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink to="/mentors" className={getNavLinkClass}>Mentors</NavLink>
            <NavLink to="/programs" className={getNavLinkClass}>Programs</NavLink>
            <NavLink to="/resources" className={getNavLinkClass}>Resources</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center">
            <button className="bg-[#2b63d9] text-white px-8 py-3 rounded-lg text-[15px] font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none p-2 hover:bg-slate-50 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-8 px-6 space-y-6 shadow-2xl z-50 animate-in">
          <NavLink to="/mentors" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>Mentors</NavLink>
          <NavLink to="/programs" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>Programs</NavLink>
          <NavLink to="/resources" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>Resources</NavLink>
          <NavLink to="/about" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <div className="pt-4">
            <button className="w-full py-4 bg-[#2b63d9] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-50">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
