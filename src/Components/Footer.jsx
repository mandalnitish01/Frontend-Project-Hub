import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='flex justify-around items-center h-60 bg-white text-black '>
        <div className='flex  gap-4 items-center'>
            <div>
        <a href="" className='text-3xl'> HEARD <br /> <span className='text-2xl'>
        ENOUGH?    </span> 
        </a>
        </div>
        <div className=' bg-black w-9 h-9  rounded-full cursor-pointer'>
        <FaLongArrowAltRight className='text-lg  mt-2 ml-2 text-white' />
        </div>
        </div>
        <div>
            <p className='text-8xl'>Contact Us</p>
        </div>
        <div>
     <button className='w-14 bg-green-500 h-14 rounded-full hover:bg-green-400 transition-all'>
     <SlArrowRight  className='ml-5 text-xl font-extrabold'/>
     </button>
        </div>
    </div>
  )
}

export default Footer