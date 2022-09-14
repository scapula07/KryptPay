import React from 'react'
import Layout from "../../Layout/layout"
import mainlogo from "../../assests/mainlogo.png"
import {MdOutlineArrowDropDown,MdContentCopy}  from "react-icons/md"
import logo from "../../assests/mainlogo.png"
import logo2 from "../../assests/logo2.png"
import qrcode from "../../assests/qrcode.png"



export default function Receive() {
  return (
    <Layout>
        <div>
            <div className='pt-10'>
             <h5 className='text-xl home-text font-semibold'>Send</h5>
           </div>

           <div className='bg-slate-300  h-10 py-2 px-4 mt-6 rounded-lg flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <h5 className='bg-white p-1 w-6 h-6'><img src={mainlogo} className=" w-4 h-4" alt=""/></h5>
                <h5 className='text-lg font-semibold'>Krypt </h5>
              </div>
              <MdOutlineArrowDropDown className='text-lg '/>

           </div>

           <div className=' bg-slate-300 px-4 pt-2 pb-6  mt-6 rounded-lg'>
               <div className='flex items-center justify-between'>
                 <h5 className='home-text text-lg font-semibold' >Your Wallet Address</h5>
                 <MdContentCopy className='home-text text-lg font-semibold'/>
               </div>


                <div className='flex space-x-4  py-6'>
                    <h5 className='flex bg-slate-100 h-14 w-14 p-2 rounded-lg'>
                    <img src={logo} alt="" className='h-8 w-8'/>
                    <img src={logo2} alt="" className='-ml-6 h-8 w-8'/>
                    </h5>

                    <h5 className='flex flex-col'>
                        <span className='home-text text-lg font-semibold'>{"Klvtyudjwf..jcbdbrhb"}</span>
                        <span className='home-text text-lg font-semibold'>Krypt</span>

                    </h5>
                 </div>

                 <div className='h-64 flex justify-center'>
                    <img src={qrcode} className="h-52 w-52" alt=""/>

                 </div>


           </div>

         
         </div>


    </Layout>
    
  )
}
