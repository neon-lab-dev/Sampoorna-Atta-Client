import { ShoppingCart, X } from "lucide-react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const cartItemCount = 2;

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className="font-Roboto py-3 md:py-0 2xl:py-8 font-Poppins relative">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="">
            <img
              src={IMAGES.logo}
              alt=""
              className="w-16 md:w-21 h-17 md:h-23"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-neutral-10 text-lg hover:text-primary-5 px-3 py-2 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-primary-10" />
              </Link>
            ))}

            {/* Cart */}
            <Link
              to="/cart"
              className="bg-white border border-primary-5 text-primary-5 rounded-full size-9 flex items-center justify-center hover:bg-primary-5 hover:text-white transition-colors duration-200 relative"
            >
              <ShoppingCart className="size-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center bg-primary-10">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Login/Account */}
            <button className="px-8 py-4 bg-primary-5 rounded-3xl text-neutral-10 text-lg font-bold">
              Sign-Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <img src={ICONS.hamburgerMenu} alt="" className="size-8" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMenuOpen(false)}
                  />

                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                  >
                    {/* Close button */}
                    <div className="flex justify-end p-3 pb-0">
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="size-4 text-gray-500" />
                      </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="p-3 pt-0">
                      {navLinks.map((link) => (
                        <motion.div key={link.name} variants={itemVariants}>
                          <Link
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-neutral-10 text-base hover:text-primary-5 hover:bg-gray-50 transition-all duration-200 px-4 py-2.5 rounded-md"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}

                      <motion.div variants={itemVariants}>
                        <Link
                          to="/cart"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between text-neutral-10 text-base hover:text-primary-5 hover:bg-gray-50 transition-all duration-200 px-4 py-2.5 rounded-md"
                        >
                          <span>Cart</span>
                          {cartItemCount > 0 && (
                            <span className="text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center bg-primary-10">
                              {cartItemCount}
                            </span>
                          )}
                        </Link>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="mt-2 pt-2 border-t border-gray-100"
                      >
                        <button className="w-full px-4 py-2.5 bg-primary-5 rounded-md text-neutral-10 font-semibold hover:bg-primary-6 transition-colors">
                          Sign-Up
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
