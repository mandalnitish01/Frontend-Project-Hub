import React from "react";
import {Link} from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-7xl mt-10">
        Projects Hub <br />
          <span className="text-6xl ml-10">and Some AI Tools</span>
        <br />
        <span className="text-5xl ml-4">That help you lot!</span> 
      </h1>
      <div className="w-[700px]">
      <p className=" font-sans mt-6 leading-6 ">
      This is the Hub of frontend project's and Here you find the best AI tools fot help you in future and this AI tools are free to use for everyone and this is not nay barriewr on this.
      </p>
      </div>
      
      <div className="mt-12 w-[120px]  flex items-center justify-center h-[30px] bg-slate-50 rounded-sm hover:bg-slate-500 transition-all text-blue-500 ">

        <Link to='/getstarted'> Get Started </Link>
        
      </div>
    </div>
  );
};

export default HeroSection;
