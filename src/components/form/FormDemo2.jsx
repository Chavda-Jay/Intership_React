import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("Errors...",errors)

    const validationSchema={
        ageValidator:{
            required:{
                value:true,
                message:"Age Is Required*"
            },
            min:{
                value:18,
                message:"Min Age is should be 18"
            },
            max:{
                value:60,
                message:"max age is should be 60"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"Address Is required"
            },
            minlength:{
                value:5,
                message:"min 5 char iss required"
            },
            maxlength:{
                value:20,
                message:"max 20 char is accepted"
            }
        }
    }

    const submitHandler = (data)=>{
        alert("Form Subbmited...")
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <lable>Name:</lable>
                <input type='text' {...register("name",{required:{value:true,message:"Name Is Required*"}})}></input>
                {errors.name && errors.name.message}
            </div>

            <div>
                <label>Age:</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>

             <div>
                <label>Address:</label>
                <input type='text' {...register("add",validationSchema.addressValidator)}></input>
                {errors.add?.message}
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
