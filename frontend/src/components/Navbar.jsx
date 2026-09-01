import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Tours", path: "/tours" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      
      {/* 1. TOP HEADER STRIP */}
      <div className="bg-[#080616] text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-[#1A1953]">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+917891604638"
            className="flex items-center gap-1.5 hover:text-white transition font-medium"
          >
            <Phone size={13} className="text-[#34A99D]" />
            <span>+91 7891604638</span>
          </a>
          <a
            href="mailto:ishika.travels4379@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition font-medium"
          >
            <Mail size={13} className="text-blue-300" />
            <span>ishika.travels4379@gmail.com</span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[11px] text-blue-200 font-semibold">
          <Sparkles size={12} className="text-[#34A99D]" />
          <span>Top Taxi & Sightseeing Service in Rajasthan</span>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#162E93]/20 shadow-xs py-3.5 px-4 sm:px-8 flex justify-between items-center relative z-40">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Ishika Tour & Travels"
            className="w-28 h-11 sm:w-29 sm:h-12 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 font-extrabold text-xs sm:text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 relative ${
                isActive(link.path)
                  ? "text-[#34A99D] font-black"
                  : "hover:text-[#34A99D]"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#34A99D] rounded-full shadow-xs"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/tours"
            className="hidden sm:inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#458393] to-[#34A99D] hover:from-[#34A99D] hover:to-[#458393] text-white px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#458393]/30 hover:scale-105"
          >
            <span>Book Now</span>
            <span>🚀</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#34A99D] transition focus:outline-none cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* 3. RIGHT SIDEBAR MOBILE DRAWER (70% Width with Smooth Transition) */}
      
      {/* Dimmed Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 lg:hidden transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding Drawer from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between p-6 lg:hidden transition-transform duration-500 ease-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header with Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="font-black text-xs uppercase tracking-widest text-[#34A99D]">
              Ishika Tours & Travles
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links List */}
          <div className="flex flex-col space-y-3 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  isActive(link.path)
                    ? "bg-[#FFF3C8] text-[#458393] font-black"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#34A99D]"
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <ArrowRight size={14} className="text-[#34A99D]" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Link
            to="/tours"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#458393] to-[#34A99D] active:scale-95 text-white py-3 rounded-2xl font-black text-xs shadow-md shadow-[#458393]/25 transition"
          >
            <span>Book Tour Now 🚀</span>
          </Link>

          <div className="text-center">
            <a
              href="tel:+917891604638"
              className="text-[11px] font-bold text-slate-500 hover:text-[#34A99D] flex items-center justify-center gap-1.5 transition"
            >
              <Phone size={12} className="text-[#34A99D]" />
              <span>Call: +91 7891604638</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;