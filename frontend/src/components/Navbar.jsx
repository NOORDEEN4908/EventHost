import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  
  const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'Event', path: '#event' },
  { name: 'Speakers', path: '#speakers' },
  { name: 'Agenda', path: '#agenda' },
  { name: 'AboutUs', path: '#about' },
    { name: 'Contact us', path: '#Contact' },

];

  

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between ${
        isScrolled
          ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3'
          : 'bg-black text-white py-4 md:py-6'
      }`}
    >
      <a href="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className={`h-9 ${isScrolled ? 'invert opacity-80' : ''}`}
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="relative group transition-all"
          >
            {link.name}
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              }`}
            />
          </a>
        ))}
      
      </div>


      <div className="hidden md:flex items-center gap-4">
        <svg
          className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      <a href="#register">
  <button
    className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
      isScrolled ? 'bg-black text-white' : 'bg-white text-black'
    }`}
  >
    Register
  </button>
</a>

      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <svg
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 transition-all duration-500 z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button className="border px-4 py-1 text-sm rounded-full">New Launch</button>
        <button className="bg-black text-white px-8 py-2.5 rounded-full">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
