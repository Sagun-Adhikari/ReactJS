//wrap the main.jsx , app with browser router
import React from 'react'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import  About  from './pages/About'
import  Contact  from './pages/Contact'


const App = () => {
  return (
    <>
    <header>thisis header</header>
     <BrowserRouter>
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/About'>About</Link>
    <Link to='/Contact'>Contact</Link>


      {/* <a href='/'>home page</a>
      <a href='/About'>About</a>
      <a href='/Contact'>Contact</a> */}
    </nav>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
<footer> this is footerr</footer>
    </>
  )
}

export default App