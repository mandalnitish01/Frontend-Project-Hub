import React from 'react'
import { SlArrowUp } from "react-icons/sl";

const Copyright = () => {
    const Gototop = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }

    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-5 py-3 bg-green-950 text-white'>
            <div className="text-center md:text-left">
                <p>Copyright 2022. All rights reserved.</p>
            </div>
            <div className='text-3xl text-center bg-white w-16 h-16 rounded-full mt-5 md:mt-0 md:ml-5 cursor-pointer' onClick={Gototop}>
                <SlArrowUp className='text-black text-4xl font-extrabold mx-auto mt-2' />
            </div>
            <div className="text-center md:text-right mt-5 md:mt-0">
                <p>Developed by 
                    <a href="https://github.com/mandalnitish01" className='font-extrabold text-2xl ml-1'>Nitish Kumar</a>
                </p>
            </div>
        </div>
    )
}

export default Copyright
