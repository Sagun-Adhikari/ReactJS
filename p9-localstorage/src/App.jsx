import React from 'react'

const App = () => {
  localStorage.setItem('user','sagun')//you can remove this line after executing oe time, the 
  //data will remain save into local storage ie inspect --> application -->local storage -->url/url
 let user= localStorage.getItem('user');
 console.log(user)

 localStorage.removeItem('user')
  return (
  <>
  <h1>local storage management</h1>
  
  
  </>
  )
}

export default App