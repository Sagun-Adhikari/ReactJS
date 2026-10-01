import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState({user:'sagun' ,age:20});
  function changename(){
    setfirst({user:"ram", age:100});
  }
  return (
    <>
    <h1>name: {first.user} and age: {first.age}</h1>
    <button onClick={changename}> change name</button>
    </>
  )
}

export default App