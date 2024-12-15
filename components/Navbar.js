// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // Replace with actual login check

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-red-600 cursor-pointer">Gym</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="hover:text-red-500 transition duration-300">About Us</Link>
          <Link href="/achievements" className="hover:text-red-500 transition duration-300">Achievements</Link>
          <Link href="/register" className="hover:text-red-500 transition duration-300">Register</Link>
          <Link href={isLoggedIn ? "/attendance" : "/login"} className="hover:text-red-500 transition duration-300">
            Attendance
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col space-y-2"
            onClick={handleMobileMenuToggle}
          >
            <div
              className={`w-6 h-1 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div onClick={handleMobileMenuToggle} className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 mt-4 absolute left-0 w-full">
          <Link href="/" className="hover:text-red-500 transition duration-300">About Us</Link>
          <Link href="/achievements" className="hover:text-red-500 transition duration-300">Achievements</Link>
          <Link href="/register" className="hover:text-red-500 transition duration-300">Register</Link>
          <Link href={isLoggedIn ? "/attendance" : "/login"} className="hover:text-red-500 transition duration-300">
            Attendance
          </Link>
        </div>
      )}
    </header>
  );
}
