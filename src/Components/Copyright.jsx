import React from 'react'
import { SlArrowUp } from "react-icons/sl";


const Copyright = () => {
    const Gototop = () =>{
        window.scrollTo({top:0, left:0, behavior: "smooth"})

    }
  return (
    <div className='flex justify-between items-center px-5 bg-green-950'>
       <div>
        <p>Copyright 2022. All rights reserved.</p>
       </div>
       <div className='text-3xl text-center bg-white w-20  h-20 rounded-full mt-[-30px]'>
        <SlArrowUp className= ' text-center cursor-pointer text-black text-4xl font-extrabold ml-5 mt-4'  onClick={Gototop}/>
       </div>
       <div>
        <p>Developed by
             <a href="https://github.com/mandalnitish01" className='font-extrabold text-2xl'>Nitish Kumar</a>
        </p>
       </div>

    </div>
  )
}

export default Copyright