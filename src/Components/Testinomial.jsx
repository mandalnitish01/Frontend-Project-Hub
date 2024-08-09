import React from 'react'
import Card from './Card'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
//  Props, api, routing, content api, functions
//  Hooks
const Testinomial = (props) => {
  let review = props.review;
  const[index, setindex] = useState(0);
  function leftShiftHandler()
  {
    if(index - 1 < 0)
      {
        setindex(review.length - 1)
      }
       else{
        setindex(index-1)
      }
  }
  function rightShiftHandler()
  {
    if(index + 1 >= review.length)
      {
        setindex(0)
      }
      else{
        setindex(index+1)
      }
  }
  function surprisedmehandler()
  {
   let randomindex =Math.floor(Math.random() * review.length);
   setindex(randomindex);
  }
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review = {review[index]}/>

        <div className="flex text-4xl mt-5 gap-3 text-violet-400 font-bold align-center justify-center">
        <button 
        onClick={leftShiftHandler}
         className="cursor-pointer hover:text-violet-500">
        <MdOutlineKeyboardArrowLeft />
        </button>
        <button
        onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
        <MdKeyboardArrowRight />
        </button>
      </div>
      <div> 
        <button
        onClick={surprisedmehandler}
        className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer  px-10 py-2 rounded-lg font-bold text-white text-lg">
          Surprise me
        </button>
      </div>
    </div>
  )
}

export default Testinomial