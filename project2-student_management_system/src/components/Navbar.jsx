import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Addstudent from '../pages/Addstudent'
import ViewStudent from '../pages/ViewStudent'


const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/'>index page</Link>
        <Link to='/Addstudent'>Addstudent</Link>
        <Link to='/ViewStudent'>ViewStudent</Link>
    </nav>  
    <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/Addstudent' element={<Addstudent/>} />
        <Route path='/ViewStudent' element={<ViewStudent/>} />
        
    </Routes>


    </>
  )
}

export default Navbar