import React from 'react'

export const MapDemo5 = () => {
    var students=[
        {id:1,name:'jay',age:23,marks:80,city:'viramgam',gender:'male'},
        {id:2,name:'Ankita',age:31,marks:78,city:'Rajkot',gender:'female'},
        {id:3,name:'sapan',age:122,marks:90,city:'mandal',gender:'male'}
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>MapDemo5</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender=="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color:st.age>24 ? "red":"green"}}>{st.age}</td>
                            <td style={{backgroundColor:st.marks>80 && "yellow"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
