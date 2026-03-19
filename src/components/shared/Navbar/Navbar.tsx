import { ShoppingCart } from "lucide-react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const cartItemCount = 2;

  return (
    <nav className="font-Roboto py-8 font-Poppins">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="">
            <img src={IMAGES.logo} alt="" className="w-21 h-23" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-10 text-lg hover:text-primary-5 px-3 py-2 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-primary-10" />
              </a>
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
