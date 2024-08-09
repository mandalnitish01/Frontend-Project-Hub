import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div class="wrapper" className="flex justify-around px-2 py-5 items-center bg-black">
      <div className="flex items-center gap-1"> 
        <img src="https://static.vecteezy.com/system/resources/previews/019/514/641/original/letter-n-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg" alt="Logo" className="w-16 rounded-full h-12"/>
        <a className="text-2xl" href="">Frontend Projects HUB!</a>
        </div>
      <div className="flex text-lg flex-row gap-5">
        <Link   to='/'  className="hover:text-blue-600 transition-all">Home </Link>
        <Link   to='/about'  className="hover:text-blue-600 transition-all">About Me </Link>
        <Link   to='/projects'  className="hover:text-blue-600 transition-all">Projects </Link>
        <Link   to='/aitools'  className="hover:text-blue-600 cursor-default transition-all">AI Tools </Link>
      </div>

      <div className="flex gap-10">
        <button className="w-[90px] h-[30px] bg-slate-50 rounded-sm hover:bg-slate-200 transition-all">
            <Link to='/login' className="text-blue-500">Login</Link>
        </button>
        <button className="w-[90px] h-[30px] bg-slate-50 rounded-sm hover:bg-slate-200 transition-all" >
            <a className="text-blue-500 cursor-default" href="#">Free Access</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
