import React from 'react'
import Secondhome from '../SecondHome'
import Herosection from '../HeroSection'
import Footer from '../Footer'
import MainFooter from '../MainFooter'
import Copyright from '../Copyright'
import Testinomial from '../Testinomial'
import review from './data'


const Home = () => {
  return (
 <>
<Herosection/>
<Secondhome/>
<div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testinomial</h1>
      <div className="bg-violet-400 h-[4px] w-[1/5] mt-1 mx-auto"></div>
      <Testinomial review={review} />
    </div>
    </div>
<Footer/>
<MainFooter/>
<Copyright/>
 </>
  )
}

export default Home