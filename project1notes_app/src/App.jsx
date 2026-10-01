import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {

  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('')
  
  function submitted(e){
    e.preventDefault();
    console.log(title)
    console.log(detail)
    settitle('');
    setdetail('')

  }



function titlechange(e){
settitle(e.target.value);
}
function descchange(e){
setdetail(e.target.value);
}


  
  return (
    <>
    <div id="container">

      <div className="form-side">
        <form onSubmit={submitted}>
          <input
            type="text"
            name="text"
            placeholder="Enter the note title"
            value={title}
            onChange={titlechange}
          />

          <textarea
            placeholder="Enter the notes here"
            rows={5}
            value={detail}
            onChange={descchange}
          ></textarea>

          <button type="submit">Save Note</button>
        </form>
      </div>

      <div className="image-side">
    <img
  src="https://tze1.ru/upload/medialibrary/ebe/warmlight.jpg"
  alt="Open book in dark background"
/>
      </div>

    </div>

    <div className="notes-section">
      <h1>Recent Notes</h1>
  <div className="notes-grid">
    
    <div className="note-card">
      <h1>{title}</h1>
      <p>{detail}</p>
    </div>
    
  </div>
</div>

    </>
  )
}

export default App
