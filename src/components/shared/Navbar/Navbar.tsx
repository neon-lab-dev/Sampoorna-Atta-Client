import { ChevronRight, ShoppingCart, } from "lucide-react";
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

  // // Dropdown animation variants
  // const dropdownVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: -10,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.25,
  //       staggerChildren: 0.05,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: -10,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: -10,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

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
          {/* Mobile Menu Button */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="focus:outline-none"
            >
              <img src={ICONS.hamburgerMenu} alt="" className="size-8" />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black z-40"
                  />

                  {/* Sidebar */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="fixed top-0 right-0 h-screen w-screen bg-background-5 z-50 shadow-xl flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center px-4 pt-14 pb-12">
                      <Link to="/" className="">
                        <img
                          src={IMAGES.logo}
                          alt=""
                          className="w-16 md:w-21 h-17 md:h-23"
                        />
                      </Link>
                      <button onClick={() => setIsMenuOpen(false)}>
                        <  ChevronRight />

                      </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col px-4 gap-12">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className=" rounded-md hover:bg-gray-100 text-neutral-20 font-bold"
                        >
                          {link.name}
                        </Link>
                      ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-auto  flex justify-between px-4 pb-14 items-center">
                      <Link
                        to="/cart"
                        className=" border-3 border-primary-5 size-10 text-primary-5 rounded-full flex items-center justify-center hover:bg-primary-5 hover:text-white transition-colors duration-200 relative"
                      >
                        <ShoppingCart className="size-6" />
                        {cartItemCount > 0 && (
                          <span className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center bg-primary-10">
                            {cartItemCount}
                          </span>
                        )}
                      </Link>
                      <button className="w-fit px-8 rounded-3xl py-4 bg-primary-5 text-neutral-10 font-bold text-lg">
                        Sign-Up
                      </button>
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
