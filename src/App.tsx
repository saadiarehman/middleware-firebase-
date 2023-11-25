import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react'
import Home from "./components/Home.tsx"
import Login from "./components/Login.tsx"
import Signup from "./components/Signup.tsx"
import {auth} from './firebase.tsx'
function App() {
  const [userName, setUserName]=useState("")
 useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName?? '')
      }else{
        setUserName("")
      }
    })
 },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
