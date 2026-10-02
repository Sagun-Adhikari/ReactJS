import React from 'react'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav>
      <Link to='/' >Home</Link>
      <Link to='/Contact' >Contact</Link>
      <Link to='/About' >About</Link>
    </nav>
    </>
  )
}

export default Navbar