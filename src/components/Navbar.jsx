import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Loan Info', href: '#loan-info' },
    { label: 'Apply Now', href: '#apply', isButton: true },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src="https://www.loans.com.au/media/assets/main-logo.svg"
            alt="Cash Direct Logo"
            className="h-8 md:h-10"
          />
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ label, href, isButton }) =>
            isButton ? (
              <a
                key={label}
                href={href}
                className="bg-pink-600 text-white px-4 py-2 rounded font-medium hover:bg-pink-700 transition"
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="text-pink-600 hover:text-pink-700 font-medium transition"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl text-pink-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map(({ label, href, isButton }) =>
            isButton ? (
              <a
                key={label}
                href={href}
                className="block bg-pink-600 text-white px-4 py-2 rounded font-medium text-center"
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="block text-pink-600 hover:text-pink-700 font-medium"
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
