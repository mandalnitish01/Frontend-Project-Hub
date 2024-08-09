import React from 'react'

const login = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-7 '>
        <h1 className='text-2xl'>Login/Register form</h1>
        <form>
            <label>Username:</label>
            <br />
            <input type="text" name="username" />
            <br />
            <label>Password:</label>
            <br />
            <input type="password" name="password" />
            <br />
            <div className='flex flex-row justify-around mt-4'>
            <button type="submit" className='w-24 bg-black rounded-md hover:bg-slate-900 cursor-default transition-all'>Login</button>
            <button type="submit">Register</button>
            </div>
        </form>
    </div>
    
    </>
  )
}

export default login