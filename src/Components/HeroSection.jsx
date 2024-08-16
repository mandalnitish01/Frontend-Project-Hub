import React from "react";

import { Link } from 'react-router-dom'


const HeroSection = () => {

  return (

    <div className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">

      <h1 className="text-5xl md:text-6xl lg:text-7xl mt-10">

        Projects Hub <br />

        <span className="text-4xl md:text-5xl lg:text-6xl ml-6 md:ml-8 lg:ml-10">and Some AI Tools</span>

        <br />

        <span className="text-3xl md:text-4xl lg:text-5xl ml-4 md:ml-6 lg:ml-8">That help you lot!</span>

      </h1>

      <div className="w-full md:w-[600px] lg:w-[700px]">

        <p className="font-sans mt-6 leading-6 md:leading-7 lg:leading-8">

          This is the Hub of frontend project's and Here you find the best AI tools fot help you in future and this AI tools are free to use for everyone and this is not nay barriewr on this.

        </p>

      </div>


      <div className="mt-12  w-full md:w-[150px] lg:w-[120px] flex items-center justify-center   h-[25px] md:h-[40px] lg:h-[50px] bg-slate-50 rounded-sm hover:bg-slate-500 transition-all text-blue-500">

        <Link to='/getstarted' className="text-lg md:text-xl   rounded-lg lg:text-xl">Get Started</Link>

      </div>

    </div>

  );

};


export default HeroSection;