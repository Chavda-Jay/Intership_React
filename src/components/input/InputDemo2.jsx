import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const InputDemo2 = () => {

    const [name,setName]=useState("")
    const [gender,setgender]=useState("")
    const [country,setcountry]=useState("")
    
    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const genderHandler=(event)=>{
        setgender(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>Name :</label>
            <input type='text' placeholder='Enter Name' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>Gender :</label><br></br>
           Male : <input type='radio' value='male' name='gender' onChange={(event)=>{genderHandler(event)}}></input><br></br>
           Female : <input type='radio' value='female' name='gender' onChange={(event)=>{genderHandler(event)}}></input>
            <h2>{gender}</h2>
        </div>
        <div>
            <label>Country</label>
            <select onChange={(event)=>{setcountry(event.target.value)}}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
              {country}
        </div>
    </div>
  )
}
