import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center h-auto py-10 bg-white text-black space-y-10 md:space-y-0'>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div>
          <a href="" className='text-3xl md:text-4xl lg:text-5xl'>
            HEARD <br /> 
            <span className='text-2xl md:text-3xl lg:text-4xl'>ENOUGH?</span> 
          </a>
        </div>
        <div className='bg-black w-9 md:w-12 lg:w-14 h-9 md:h-12 lg:h-14 rounded-full cursor-pointer flex items-center justify-center'>
          <FaLongArrowAltRight className='text-lg md:text-xl lg:text-2xl text-white' />
        </div>
      </div>
      <div className='text-center md:text-left'>
        <p className='text-4xl md:text-5xl lg:text-6xl'>Contact Us</p>
      </div>
      <div>
        <button className='w-14 md:w-16 lg:w-18 bg-green-500 h-14 md:h-16 lg:h-18 rounded-full hover:bg-green-400 transition-all flex items-center justify-center'>
          <SlArrowRight className='text-xl md:text-2xl lg:text-3xl font-extrabold' />
        </button>
      </div>
    </div>
  )
}

export default Footer;