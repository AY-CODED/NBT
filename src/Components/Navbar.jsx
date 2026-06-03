import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // <-- Lucide React icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors ${
      isActive ? "bg-yellow-400 text-black" : "text-white"
    }`;

  return (
    <nav className="bg-blue-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Norex Brain Tech
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/courses" className={linkClasses}>Courses</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          <NavLink
            to="/enroll"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors"
          >
            Enroll
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 w-full px-4 py-4 flex flex-col space-y-2">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/courses" className={linkClasses} onClick={toggleMenu}>
            Courses
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
            Contact
          </NavLink>
          <NavLink
            to="/enroll"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors"
            onClick={toggleMenu}
          >
            Enroll
          </NavLink>
        </div>
      )}
    </nav>
  );
}