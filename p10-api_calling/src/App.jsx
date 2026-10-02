import React from 'react'

const App = () => {
  //use the asynce await asynchronus js to solve the wait the op
  //since the api calling is the ASYNCHRONOUS in js sooo
  //method 1:api calling using fetch
  // async function getdata(){
  //   console.log('button clickled');
  //   let response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response);
    
  // }


  async function getdata(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log(response);
    const data= await response.json();
    console.log(data);
    

    
  }
  return (
    <>
    <button onClick={getdata}>click me</button>
    </>
  )
}

export default App