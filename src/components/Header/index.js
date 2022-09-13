import React from 'react'
import profilePic from "../../assests/profile.png"
import "./header.css"
import {FiSearch} from "react-icons/fi"
import {MdOutlineNotificationsNone} from "react-icons/md"
import {HiArrowNarrowLeft} from "react-icons/hi"

export default function Header() {
  return (
    <div className='w-full fixed bg-white'>
            {window.location.href ==="https://krypt-pay.vercel.app/home"? 

        <div className='flex items-center  justify-between  w-full'>
            <main className='flex space-x-2 items-center '>
                <div>
                   <img src={profilePic} alt="" className='rounded-lg w-12 h-12' />
                </div>
                <div className='flex flex-col'>
                    <h5 className='text-lg header-text font-bold'>{"Lasso Kayne"}</h5>
                    <h5 className='header-text text-sm'>Welcome Back!</h5>
                    
                </div>

            </main>

                <main className='flex pr-8 space-x-3'>
                    <FiSearch className='text-xl header-text font-light'/>
                    <MdOutlineNotificationsNone className='text-xl header-text font-light' />

                 </main>
        </div>

        :
        <>
        {window.location.href ==="http://localhost:3000/auth/"?
          <></>
        :
        <div>
            <div className='pt-4'>
                <HiArrowNarrowLeft className='header-text text-3xl' />

            </div>


         </div>
        }
        </>
     }
    </div>
  )
}
