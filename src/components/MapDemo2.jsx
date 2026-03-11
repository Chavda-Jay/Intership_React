import React from 'react'
import { generatePath } from 'react-router-dom'

export const MapDemo2 = () => {

    var users =[
        {id:1,name:'jay',age:23,gender:'male'},
        {id:2,name:'shruti',age:28,gender:'female'},
        {id:3,name:'manisha',age:30,gender:'female'}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {
            users.map((user)=>{
                return <li>{user.id}-{user.name} {user.age}-{user.gender}</li>
            })
        }
    </div>

  )
}
