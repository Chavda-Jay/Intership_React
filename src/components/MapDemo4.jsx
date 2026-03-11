import React from 'react'

export const MapDemo4 = () => {
    var cities=[
        {id:1,name:'Ahmedabad',pop:800000,AQI:302},
        {id:2,name:'Delhi',pop:10000000,AQI:400},
        {id:3,name:'Mumbai',pop:900000,AQI:200},
    ]
  return (
    <div style={{textAlign:'center'}}>
       <h1>MapDemo4</h1>
       <table className='table table-dark'>
        <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Population</th>
               <th>AQI</th>
            </tr>
        </thead>
        <tbody>
           {
            cities.map((city)=>{
                return <tr>
                    <td>{city.id}</td>
                    <td>{city.name}</td>
                    <td>{city.pop}</td>
                    <td>{city.AQI}</td>
                </tr>
            })
           }
        </tbody>
       </table>
    </div>
  )
}
