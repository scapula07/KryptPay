import React,{useState} from 'react'
import "../LandingPage/landpage.css"
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";
import { doc,getDoc,setDoc }  from "firebase/firestore";
import {signUp,db} from "../../firebase"
import { useNavigate } from "react-router-dom";
import {worldIDverificationHandler} from "../../wordIDVerification"

export default function SignUp() {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    let navigate = useNavigate();

    const AuthSubmit=async(event)=>{

        event.preventDefault()
         console.log("signing in")
        try{
       const userCredential  = await signUp(email,password)
       const user=userCredential.user
     //  await handerCustomerProfile(user,)
      
      const uid=user.uid
      console.log(uid)

      const userRef =doc(db,"users",uid)
      const payload={
          email:email
      }
       const userAdded= await setDoc(userRef,payload)
         console.log(userAdded)
        
         navigate('/home')
    }
    catch(e){
        console.log(e)
    }
    }

  return (
    <div className='landingpage-bg-color h-screen w-screen overflow-hidden'>
         <div className='flex flex-col items-center space-y-10 h-full justify-center w-full'>
            <h5 className='text-white text-2xl'>Create an account</h5>
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
            <div>
            <WorldIDWidget
            actionId="wid_staging_5e063561c72689203042364a85690651" // obtain this from developer.worldcoin.org
            signal={email}
            appName="KryptPay"
            enableTelemetry
            onSuccess={async(verificationResponse) => {
              const res=await worldIDverificationHandler(verificationResponse,email)
              console.log(res,"verifiedejc")
            }} // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
           />;
            </div>

            <div className='space-y-2'>
                <button className='h-12 w-80  bg-white rounded-lg text-base home-text'
                onClick={AuthSubmit}
                >Continue</button>
                <h5 className='text-center text-slate-400'>Already have an account?<span className='text-white'>Log in</span></h5>
            </div>

         </div>

    </div>
  )
}
