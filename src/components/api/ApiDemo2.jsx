import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {

    const addUser = async()=>{
        const userObj={
            name:"amit",
            age:23,
            email:"amit1@gmail.com",
            password:"amit123",
            isActive:true
        }

        //post(url,obj)
        try{
            const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
            console.log(res)
            console.log(res.data)
        }
        catch(err){
            console.log(err)
            alert("Error While Adding User")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}
