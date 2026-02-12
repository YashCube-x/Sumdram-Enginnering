import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Machinery', path: '/machinery' },
  { name: 'Quote', path: '/quote' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-dark-950 text-lg transition-transform duration-300 group-hover:scale-110">
              SE
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white">Sundaram</span>
              <span className="text-lg font-bold text-accent ml-1">Engineering</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/quote" className="ml-3 btn-primary text-sm !py-2">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        {/* Menu panel */}
        <div
          className={`relative bg-dark-950 border-t border-dark-800 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block mt-3 btn-primary text-base text-center w-full"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
