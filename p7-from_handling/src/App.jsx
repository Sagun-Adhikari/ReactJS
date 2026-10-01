import React from 'react'

function App(){
  function submithandler(e){
    e.preventDefault();
    console.log("form is submitted");
  }
  return (
    <>
    <form onSubmit={submithandler}>
      username
      <input type="text" />
      <input type="submit" />
    </form>
    </>
  )
}

export default App