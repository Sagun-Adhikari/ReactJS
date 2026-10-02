import React, { useState } from 'react'

const counter2 = () => {
  const [initial, setinitial] = useState(0)
  function increase(){
    setinitial(initial+5)
    
  }
  function decrease(){
   setinitial(initial-5);
    

  }
  return (
    <>
    <div className='counter text-center text-xl'>counter 2</div>
    <p className='text-center'>increase by five</p>
    <h1 className='text-center'>{initial}</h1>
    <br />
    <div className="flex justify-center gap-10">
    <button className="w-12 h-12 rounded-lg bg-red-500 text-white text-2xl font-bold hover:bg-red-600 active:scale-95 transition"
        onClick={increase}>+</button>
    <button className="w-12 h-12 rounded-lg bg-red-500 text-white text-2xl font-bold hover:bg-red-600 active:scale-95 transition"
        onClick={decrease}>-</button>
        </div>
    </>
  )
}

export default counter2