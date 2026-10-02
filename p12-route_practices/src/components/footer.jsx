import React from 'react'

const footer = () => {
  return (

    <>
    {/* working but not usefull here
    <style>{`
      h1{
            text-align: center;
            color: white;
           
            padding: 20px;
            margin-buttom: 0px;
            font-family: Arial, sans-serif;
      }
      `}
      
    </style> */}
    <h1
  style={{
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    textAlign: "center",
    
    color: "Black",
    padding: "15px",
    margin: 0,
  }}
>
  Cosmos college
</h1>
    </>
  )
}

export default footer