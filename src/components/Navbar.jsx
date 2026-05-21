import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "home")}
          className="text-xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition"
        >
          
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-800">
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-blue-600 transition">About Me</a></li>
          <li><a href="#education" onClick={(e) => handleScroll(e, "education")} className="hover:text-blue-600 transition">Education</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#contacts" onClick={(e) => handleScroll(e, "contacts")} className="hover:text-blue-600 transition">Contacts</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-slate-800">
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-blue-600 transition">About Me</a></li>
          <li><a href="#education" onClick={(e) => handleScroll(e, "education")} className="hover:text-blue-600 transition">Education</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#contacts" onClick={(e) => handleScroll(e, "contacts")} className="hover:text-blue-600 transition">Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;