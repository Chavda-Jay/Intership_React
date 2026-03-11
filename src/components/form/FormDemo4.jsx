import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const {register,handleSubmit,formState: { errors },watch} = useForm({ mode: "onChange" });

  const password = watch("password") //input... password == {...re("password")}
  console.log("watching...",password)

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "password is required*",
      },
    },
    confirmPasswordValidator:{
    required: {
        value: true,
        message: "confirm password is required*",
      },
      validate:(params)=>{
        return params == password || "confirm password not matched*"
      }
    }
  };
  const submitHanlder = (data) => {
    console.log(data);
  };

   const submitHandler = (data)=>{
        alert("Form Subbmited...")
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM WATCH DEMO</h1>
      <form onSubmit={handleSubmit(submitHanlder)}>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          ></input>
          {errors.password?.message}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
          {errors.confirmPassword?.message}
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};


// import React from "react";
// import { useForm } from "react-hook-form";

// export const FormDemo4 = () => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch
//   } = useForm({ mode: "onChange" });

//   // watch password field value
//   const password = watch("password");

//   const submitHandler = (data) => {
//     console.log(data);
//     alert("Form Submitted Successfully ✅");
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>FORM WATCH DEMO</h1>

//       <form onSubmit={handleSubmit(submitHandler)}>

//         {/* Password Field */}
//         <div>
//           <label>Password</label><br />
//           <input
//             type="password"
//             {...register("password", {
//               required: "Password is required*"
//             })}
//           />
//           <p style={{ color: "red" }}>
//             {errors.password?.message}
//           </p>
//         </div>

//         {/* Confirm Password Field */}
//         <div>
//           <label>Confirm Password</label><br />
//           <input
//             type="password"
//             {...register("confirmPassword", {
//               required: "Confirm Password is required*",
//               validate: (value) =>
//                 value === password || "Confirm password not matched*"
//             })}
//           />
//           <p style={{ color: "red" }}>
//             {errors.confirmPassword?.message}
//           </p>
//         </div>

//         <div>
//           <input type="submit" />
//         </div>

//       </form>
//     </div>
//   );
// };