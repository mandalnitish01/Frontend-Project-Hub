import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Aitools from './Components/AITools/Aitools'
import Spinner from './Spinner'
import Lofinfrom from './Components/Loginfrom/login'
// import Aitools from './Components/AITools/Aitools'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Navbar /> {/* Assuming you want to render the Navbar component */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/aitools' element={<Aitools/>}/>
        <Route path='/getstarted' element={<Spinner/>}/>
        <Route path='/login' element={<Lofinfrom/>}/>
      </Routes>
    </>
  )
}

export default App
