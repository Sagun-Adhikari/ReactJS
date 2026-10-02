import React from 'react'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Header from './components/header'
import "./App.css";


export const App = () => {
  return (
    
   <>
   <div id='body'>
   <div id='header'>
  <Header /> <br /><br /><br /><br /> 
  <Navbar />
  </div>
   

   <Routes>
    <Route path='/' element={<Index />}/> 
    <Route path='/Contact' element={<Contact />}/> 
    <Route path='/About' element={<About />}/> 
   </Routes>
 <Footer />
 </div>
   </>
  )
}

export default App
