import React from 'react'
import BottomNav from '../components/BottomNav'
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children,connectWallet}) {
  return (
    <div className='w-screen overflow-x-hidden'>
        <div className=' px-4 py-4'>
        <div className=' bg-white'>
            <Header />
        </div>
        <div>
            {children}
        </div>
        </div>

        <div className='fixed bottom-0 w-screen'>
            <BottomNav connectWallet={connectWallet}/>
        </div>

        <>
         <ToastContainer />
        
        </>
    </div>
  )
}
