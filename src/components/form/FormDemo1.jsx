import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit}=useForm()
    const [useData,setuserData] = useState({})
    const [isSubmited,setisSubmited]=useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label><b>Name :</b></label>
                <input type='text' placeholder='Enter Name' {...register("firstName")}></input>
            </div>

            <div>
                <label><b>Age : </b></label>
                <input type='text' placeholder='Enter Age' {...register("age")}></input>
            </div>

            <div>
                <label><b>Gender : </b></label>
                MALE : <input type='radio' value='male' {...register("gender")}></input>
                FEMALE : <input type='radio' value='female' {...register("gender")}></input>
            </div>

            <div>
                <label><b>Hobbies : </b></label>
                CRICKET :<input type='checkbox' value="cricket" {...register("hobbies")}></input>
                Travel :<input type='checkbox' value="travel" {...register("hobbies")}></input>
                Scrolling :<input type='checkbox' value="scrolling" {...register("hobbies")}></input>             
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>

            {
                isSubmited == true && <div>
                    <h1>OUTPUT :</h1>
                    <h3>Name={useData.firstName}</h3>
                    <h3>Age={useData.age} </h3>
                    <h3>Gender = {useData.gender}</h3>
                    <h3>Hobbies = {useData.hobbies?.join(", ")}</h3>
                    </div>
            }

    </div>
  )
}
