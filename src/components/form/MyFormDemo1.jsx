import {useState} from 'react'
import { useForm } from 'react-hook-form'

export const MyFormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [userData,setuserData] = useState({})
    const [isSubmited,setisSubmitted] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmitted(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name :</label>
                <input type='text' placeholder='Enter First Name' {...register("firstname")}></input>
            </div>

            <div>
                <label>Last Name :</label>
                <input type='text' placeholder='Enter Last Name' {...register("lastname")}></input>
            </div>

            <div>
                <label>Email :</label>
                <input type='text' placeholder='Enter Email' {...register("email")}></input>
            </div>

            <div>
                <label>Age :</label>
                <input type='number' placeholder='Enter Age' {...register("age")}></input>
            </div>

            <div>
                <label>Gender :</label>
                Male:<input type='radio' value='male' {...register("gender")}></input>
                Female:<input type='radio' value='female' {...register("gender")}></input>
            </div>

            <div>
                <input type="submit"></input>
            </div>
        </form>

        {
            isSubmited == true && 
            <div>
                <h1>Result</h1>
                <h2>FirstName : {userData.firstname}</h2>
                <h2>LastName : {userData.lastname}</h2>
                <h2>Email : {userData.email}</h2>
                <h2>Age : {userData.age}</h2>
                <h2>Gender : {userData.gender}</h2>
            </div>
        }
    </div>
  )
}


