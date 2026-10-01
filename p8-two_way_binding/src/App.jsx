// import React from 'react'

// function App(){
//   function submithandler(e){
//     e.preventDefault();
//     console.log("form is submitted");
//   }
//   function changing(e){
//     // console.log(e);
//     //  console.log(e.target);
//      console.log(e.target.value);
    
//   }
//   return (
//     <>
//     <form onSubmit={submithandler}>
//       username :
//       <input type="text" onChange={changing} /><br /> 

//     <div className='submit'>  <input type="submit" /></div>

//     </form>
//     </>
//   )
// }

// export default App














// import React from 'react'

// function App(){
//   function submithandler(e){
//     e.preventDefault();
//     console.log("form is submitted");
//   }
 
//   return (
//     <>
//     <form onSubmit={submithandler}>
//       username :
//       <input type="text" value="sagun" /><br /> 

//     <div className='submit'>  <input type="submit" /></div>

//     </form>
//     </>
//   )
// }

// export default App








import React from 'react'
import { useState } from 'react'

function App(){
  const [first, setfirst] = useState('')

  function submit(e){
e.preventDefault();
console.log('from submitted by',first);
setfirst('')
  }
  
  function onchange(e){
    setfirst(e.target.value)
  }
  return (
    <>
    <form onSubmit={submit}>
      username :
      <input type="text"   onChange={onchange} value={first}/><br /> 

    <div className='submit'>  <input type="submit" /></div>

    </form>
    </>
  )
}

export default App