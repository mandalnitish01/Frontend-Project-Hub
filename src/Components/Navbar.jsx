import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrapper flex justify-between items-center px-2 py-5 bg-black text-white" style={{ flexWrap: "wrap" }}>
      <div className="flex items-center gap-1 mb-2 md:mb-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/514/641/original/letter-n-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg"
          alt="Logo"
          className="w-16 rounded-full h-12"
        />
        <a className="text-2xl" href="">
          Frontend Projects HUB!
        </a>
      </div>
      <div className="hidden md:flex text-lg flex-row gap-5 mb-2 md:mb-0">
        <Link to="/" className="hover:text-blue-600 transition-all">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition-all">
          About Me
        </Link>
        <Link to="/projects" className="hover:text-blue-600 transition-all">
          Projects
        </Link>
        <Link to="/aitools" className="hover:text-blue-600 cursor-default transition-all">
          AI Tools
        </Link>
      </div>

      <div className="hidden md:flex gap-10 mb-2 md:mb-0">
        <button className="w-[90px] h-[30px] bg-slate-50 rounded-sm hover:bg-slate-200 transition-all">
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </button>
        <button className="w-[90px] h-[30px] bg-slate-50 rounded-sm hover:bg-slate-200 transition-all">
          <a className="text-blue-500 cursor-default" href="#">
            Free Access
          </a>
        </button>
      </div>

      <button className="md:hidden" onClick={handleMenu}>
        <IoMdMenu className="text-2xl" />
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-1">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/514/641/original/letter-n-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg"
              alt="Logo"
              className="w-16 rounded-full h-12"
            />
            <a className="text-2xl text-black font-sans" href="">
              Frontend Projects HUB!
            </a>
          </div>
          <button className="md:hidden" onClick={handleMenu}>
            <ImCross className="text-xl text-black" />
          </button>
        </div>
        <div className="p-4">
          <Link to="/" className="block py-2 text-lg text-black hover:text-blue-600 transition-all" onClick={handleMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-lg text-black hover:text-blue-600 transition-all" onClick={handleMenu}>
            About Me
          </Link>
          <Link to="/projects" className="block py-2 text-lg text-black hover:text-blue-600 transition-all" onClick={handleMenu}>
            Projects
          </Link>
          <Link to="/aitools" className="block py-2 text-lg text-black hover:text-blue-600 cursor-default transition-all" onClick={handleMenu}>
            AI Tools
          </Link>
          <button className="w-full h-[30px] bg-slate-50 text-black rounded-sm hover:bg-slate-200 transition-all mt-4">
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </button>
          <button className="w-full h-[30px] bg-slate-50 text-black rounded-sm hover:bg-slate-200 transition-all mt-2">
            <a className="text-blue-500 cursor-default" href="#">
              Free Access
            </a>
          </button>
        </div>
      </div>
      {/* End Mobile Menu */}
    </div>
  );
};

export default Navbar;