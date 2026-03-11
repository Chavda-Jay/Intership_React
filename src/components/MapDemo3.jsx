import React from 'react'

export const MapDemo3 = () => {
    var students=[
        {id:1,name:'jayuuu',age:23,marks:80,city:'viramgam',gender:'male'},
        {id:2,name:'Komal',age:26,marks:76,city:'vastral',gender:'female'},
        {id:3,name:'Hari',age:33,marks:83,city:'Ahmedabad',gender:'male'},
        {id:4,name:'Hiral',age:27,marks:78,city:'Surat',gender:'female'},
        {id:5,name:'Manisha',age:30,marks:75,city:'Mandal',gender:'female'},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table className='table'border="2" align='center'>
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
                        return <tr>
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                                <td>{st.age}</td>
                                <td>{st.marks}</td>
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
