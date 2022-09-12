import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {RiContactsBookLine} from "react-icons/ri"
import {HiOutlineUser} from "react-icons/hi"
import {FiSettings} from "react-icons/fi"
import {BsWallet2} from "react-icons/bs"
import "../../pages/Home/home.css"
import "./bottomnav.css"
import ConnectWallet from '../ConnectWallet'

export default function BottomNav() {
  return (
    <div className='bg-slate-300  border-bottom px-4 w-full  py-4'>
        <div className='flex  items-center justify-around '>
            <h5 className='flex flex-col items-center justify-center'>
               <AiOutlineHome className='text-4xl home-text hover:text-2xl active:text-3xl'/>
               <span className='text-base home-text'>Home</span>
            </h5>
            <h5 className='flex flex-col items-center justify-center'>
               <RiContactsBookLine className='text-4xl home-text hover:text-2xl active:text-3xl'/>
               <span className='text-base home-text'>Contacts</span>
            </h5>
            <h5 className='bg-white rounded-full p-3 -mt-14 border-slate-200 hover:border-slate-800 border-8'>
              < ConnectWallet />
            </h5>
            <h5 className='flex flex-col items-center justify-center'>
                <HiOutlineUser className='text-4xl home-text hover:text-2xl active:text-3xl'/>
                <span className='text-base home-text'>Profile</span>
            </h5>
            <h5 className='flex flex-col items-center justify-center'>
                <FiSettings className='text-4xl home-text hover:text-2xl active:text-3xl'/>
                <span className='text-base home-text'>Profile</span>
            </h5>
        </div>
    </div>
  )
}
