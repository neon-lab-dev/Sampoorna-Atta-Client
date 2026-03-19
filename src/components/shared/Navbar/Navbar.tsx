import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import Container from '../Container/Container';

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 font-Roboto">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Sampoorna
              </span>
              <span className="text-2xl font-bold ml-1">
                Fresh
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-primary-10"
                />
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">

            {/* Cart */}
            <a
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center bg-primary-10"
                >
                  {cartItemCount}
                </span>
              )}
            </a>

            {/* Login/Account */}
            <a
              href="/login"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors duration-200 bg-primary-10"
              
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/login"
                className="flex items-center px-3 py-2 text-base font-medium text-white rounded-lg mt-2 transition-colors bg-primary-10"
                
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;