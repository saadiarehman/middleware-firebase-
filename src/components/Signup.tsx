import { Link, useNavigate } from "react-router-dom"
import InputControl from "./InputControl/InputControl"
import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "../firebase"

function SignUp() {
  const navigate=useNavigate();
    const [values, setValues]=useState({
        name:"",
        email:"",
        password:"",
    })
    const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false)
    const [errorMsg, setErrorMsg]=useState("")
    const handleSubmission=()=>{
        console.log(values)
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password).then(
            (res)=>{
              setSubmitButtonDisabled(false)
              const user=res.user;
              updateProfile(user,{
                displayName:values.name
              })
               navigate("/")
            }
        ).catch((err)=>{
          setSubmitButtonDisabled(false)
          setErrorMsg(err.message)
        });
    }
    return (
      <div className="w-screen h-screen  bg-purple-400 flex justify-center items-center">
          <div className="w-1/3 h-3/4 bg-white rounded-md flex justify-center">
            <div className="p-10 text-2xl font-bold font-serif ">
            Signup
            <InputControl label="Name" placeholder="Please Enter Name" 
             onChange={(event) => {
                setValues((prev) => ({ ...prev, name: event.target.value }));
                
              }}
            />
            <InputControl label="Email" placeholder="Please Enter Email"
            onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
               
              }} />
            <InputControl label="Password" placeholder="Please Enter Password"
            onChange={(event) => {
                setValues((prev) => ({ ...prev, password: event.target.value }));
                
              }}
            />
            <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
            <button className="text-sm bg-purple-500 rounded-sm px-10 py-1 ml-4 mt-5 disabled:bg-gray-500"
            disabled={(!(values.name && values.password && values.email) || submitButtonDisabled)}
            onClick={()=>{
                handleSubmission()
            }}>Signup</button>
            <div className="text-sm mt-5">Already have an account? <Link to="/login" className="text-purple-800">Login</Link></div>
            </div>
             
          </div>
      </div>
     
    )
  }
  
  export default SignUp