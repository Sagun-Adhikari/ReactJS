// 





// import React, { useState } from 'react'

// function App() {
//   const [oldvalue, updated] = useState('old value')
//   function changevalue(){
//     updated('new value')
//   }
//  return (
//     <>
//       <h1>this is {oldvalue}</h1>
//       <button onClick={changevalue}>change value</button>
//     </>
//     )
// }

// export default App







import React, { useState } from 'react'

const App = () => {
  const [initial, setinitial] = useState(0)
  function increase(){
    setinitial(initial+1);
  }
   function decrease(){
   setinitial(initial-1);
  }
  function jump(){
   setinitial(initial+5);
  }
  return (
   <>
   <h1>{initial}</h1>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}> decrease</button>
    <button onClick={jump}> jump by 5</button>
   </>
  )
}

export default App