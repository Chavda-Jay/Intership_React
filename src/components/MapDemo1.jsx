import React from 'react'

export const MapDemo1 = () => {

    let cars = ["audi","bmw","creta","venue","tata"]
  return (
    <div>
        <h1 style={{textAlign:"center"}}>MapDemo1</h1>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }
    </div>
  )
}
