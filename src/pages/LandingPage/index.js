import React from 'react'
import "./landpage.css"
import logo from "../../assests/mainlogo.png"
import logo2 from "../../assests/logo2.png"
import {Link} from "react-router-dom"
export default function LandingPage() {
  return (
    <div className='landingpage-bg-color h-screen px-8 overflow-hidden'>

        <div className='flex flex-col h-full justify-center items-center space-y-32 '>
            <main className='flex flex-col '>
                <div className='flex '>
                <img src={logo} alt="" className=''/>
                <img src={logo2} alt="" className='-ml-20 h-18 '/>
                </div>
              
                <h5 className='text-white text-2xl text-center font-semibold'>KryptPay</h5>
            </main>
             <main className='flex space-x-4 w-full  pt-20'>
             <button className='rounded-lg px-6 hover:bg-slate-900 py-2 login-btn bg-slate-500 text-white text-base w-1/2'>   <Link to="/login">Log in</Link></button>
                <button  className='rounded-lg hover:bg-blue-900 px-6 py-2 signup-btn  text-white text-base w-1/2'><Link to="/signup">Sign up</Link></button>
             </main>
        </div>

    </div>
  )
}
