import React from 'react'

const App = () => {
  function btnclick() {
    alert("button clicked")
  }
  function mouseover(){
    console.log('mouse is over me')
  }
  function inputchanging(val){
    console.log(val)
  }
  return (
    <>
    <div>hello guys</div>
    <button onClick={btnclick}> click me</button>
    <button onMouseEnter={mouseover}>move mouse over me</button>
   
   {/* here you cant call the function like btnclick() bcz it willc all the function 
   without event handling so just write function name */}
  <br></br>
   <button onClick={function(){
    console.log('inline funcltion clicked')
   }}>this is inline function method</button>
<br></br>



   <input type="text" placeholder='enter the name' 
   onChange={function inputchanging(elem){
    // console.log(elem)
    // console.log(elem.target);
    console.log(elem.target.value);

    // console.log(" is typing")


    <input type='text' placeholder='enter your name'
      onChange={function(elem) {
        inputchanging(elem.target.value)
      }}
    />
   }} />
  
    
    </>
  )
}

export default App