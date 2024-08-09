import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='text-center font-sans text-6xl'>About me</h1>
        <p className='text-center font-sans text-8xl text-red-300'>Coming Soon</p>
        <div class='flex space-x-2 justify-center items-center h-96 '>
    <span class='sr-only'>Loading...</span>
     <div class='h-8 w-8 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div class='h-8 w-8 bg-green-600 rounded-full animate-bounce'></div>
  
</div>

    </div>
  )
}

export default About