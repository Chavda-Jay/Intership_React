import React from "react";

export default function ContentComponent(){
    var year = 2026;
    var title = "React Js";
    var isAvailable = true;

    var student = {
        name : "jay",
        age : 23,
        city : "Viramgam"
    };

    return(
        <div style={{backgroundColor:"white",
                    border:"1px solid black",
                    minHeight:"500px",
                    width:"100%",
                    height:"auto",
                    padding:"10px" }}>

                <h1>Hello</h1>
                {year}
                <h1>Year : {year}</h1>
                <h2>Titel : {title}</h2>
                <h1>All Tag Must Have Closing Tag</h1><br></br>
                <h3>Available ??? {isAvailable == true ? "TRUE" : "FALSE"}</h3>
                <h4>At A Time We Can Return Only 1 Tag...</h4>
                <h4>
                    whatever written inside return statment will be display on browser
                </h4>

                <h2>Name : {student.name}</h2>
                <h3>Age : {student.age}</h3>
                <h3>City : {student.city}</h3>
            
        </div>
    );
}