import React,{useState} from 'react'

export const InputDemo1 = () => {

    const[name,setName]=useState("") //string
    const[age,setage]=useState("")

    const nameHandler = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler=(event)=>{
        setage(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>Name : </label>
            <input type='text' placeholder='Enter Name' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>

        <div>
            <label>Age : </label>
            <input type='text' placeholder='Enter Age' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
    </div>
    
  )
}
