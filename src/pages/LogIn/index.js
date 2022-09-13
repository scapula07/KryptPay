import React,{useState} from 'react'
import "../LandingPage/landpage.css"
import { doc,getDoc,setDoc }  from "firebase/firestore";
import {logIn,db} from "../../firebase"
import { useNavigate } from "react-router-dom";

export default function LogIn() {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    let navigate = useNavigate();

    const AuthSubmit=async(event)=>{
     try{
        event.preventDefault()
        console.log("gvcshdfkjhfhjrjfj")
       
      const userCredential  = await logIn(email,password)
      const user=userCredential.user

      console.log(user)
        
         navigate('/home')
    }
    catch(e){
        console.log(e)
    }
    }

  return (
    <div className='landingpage-bg-color h-screen w-screen overflow-hidden'>
         <div className='flex flex-col items-center space-y-10 h-full justify-center w-full'>
            <h5 className='text-white text-2xl'>Log In</h5>
            <div className='flex flex-col space-y-3 '>
                <input 
                className='h-12 w-80 input-color rounded-lg px-4 text-white border-0 outline-none'
                placeholder='Email'
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                className='h-12 w-80 input-color rounded-lg px-4 text-white border-0 outline-none'
                 placeholder='Password'
                 name="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                />
                
            </div>

            <div className='space-y-2'>
                <button className='h-12 w-80  bg-white rounded-lg text-base home-text'
                onClick={AuthSubmit}
                >Continue</button>
                <h5 className='text-center text-slate-400'>Don't have an account?<span className='text-white'>Sign Up</span></h5>
            </div>

         </div>

    </div>
  )
}
