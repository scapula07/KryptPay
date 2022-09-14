import React from 'react'
import mainlogo from "../../assests/mainlogo.png"
import {GiReceiveMoney} from "react-icons/gi"
import {FaEthereum} from "react-icons/fa"




export default function Purchase() {
  return (
    <div className=''> 
    <div className='flex flex-col items-center space-y-6 bg-slate-300 h-80 rounded-lg w-80 px-4 py-4'>
       <main className='flex flex-col'>
          <h5 className='text-lg font-semibold'>Sell ETH:</h5>
          <div className='flex space-x-4 items-center pt-2'>
             <div className='flex space-x-2  items-center'>
              <h5 className='bg-white rounded-full p-1 w-6 h-6'>
             
                <FaEthereum alt="" className='w-4 h-4 '/>
             </h5>
             <h5 className='text-sm font-semibold'>ETH</h5>
             </div>
             <>
                <input 
                 className='bg-slate-200 px-4 py-1 rounded-lg border-0 outline-none'
                 placeholder='0.0'

                
                />
             
             </>

          </div>
       </main>
       
         <h5 className='bg-slate-200 p-1 w-8 h-8 flex '>
          <GiReceiveMoney className='text-xl home-text font-semibold'/>
         </h5>


         <main className='flex flex-col'>
          <h5 className='text-lg font-semibold'>For:</h5>
          <div className='flex space-x-4 items-center py-2'>
             <div className='flex space-x-2  items-center'>
              <h5 className='bg-white rounded-full p-1 w-6 h-6'>
              <img src={mainlogo } alt="" className='w-4 h-4 '/>
             </h5>
             <h5 className='text-sm font-semibold'>KLV</h5>
             </div>
             <>
                <input 
                 className='bg-slate-200 px-4 py-1 rounded-lg border-0 outline-none'
                 placeholder='0.0'

                
                />
             
             </>
       </div>
       </main>

       <button className='w-full bg-white home-text rounded-xl py-1'>Purchase KLV</button>

    </div>  
     
     
 </div>
  )
}
