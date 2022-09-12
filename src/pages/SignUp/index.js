import React from 'react'
import "../LandingPage/landpage.css"
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";

export default function SignUp() {
  return (
    <div className='landingpage-bg-color h-screen w-screen '>
         <div className='flex flex-col items-center space-y-10 h-full justify-center w-full'>
            <h5 className='text-white text-2xl'>Create an account</h5>
            <div className='flex flex-col space-y-3 '>
                <input 
                className='h-12 w-80 input-color rounded-lg px-4 text-white border-0 outline-none'
                placeholder='Email'
                />
                <input 
                className='h-12 w-80 input-color rounded-lg px-4 text-white border-0 outline-none'
                 placeholder='Password'
                />
                
            </div>
            <div>
            <WorldIDWidget
            actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
           />;
            </div>

            <div className='space-y-2'>
                <button className='h-12 w-80  bg-white rounded-lg text-base home-text'>Continue</button>
                <h5 className='text-center text-slate-400'>Already have an account?<span className='text-white'>Log in</span></h5>
            </div>

         </div>

    </div>
  )
}
