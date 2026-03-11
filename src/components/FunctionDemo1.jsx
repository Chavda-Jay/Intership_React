import React from 'react'

export const FunctionDemo1 = () => {

    const test =()=>{
        alert("Test Function Called...")
    }
    const test2 =(x)=>{
        alert("value of x"+x)
    }

  return (
    <div style={{textAlign:"center"}}>
         <h1>FunctionDemo1</h1>
         <button onClick={()=>{test2(500)}}>CLICK</button>
    </div>
  )
}
