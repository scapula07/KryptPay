import React from 'react'
import Layout from '../../Layout/layout'
import {TbSend,TbArrowBarToDown} from "react-icons/tb"
import {GrFormAdd} from "react-icons/gr"
import logo from "../../assests/mainlogo.png"
import logo2 from "../../assests/logo2.png"

export default function Portfolio() {
  return (
    <Layout>
         <div  className='pt-10'>
           <div>
              <h5 className='text-xl home-text font-semibold'>Portfolio</h5>
           </div>

           <div className='pt-4'>
                <main className='flex flex-col bg-slate-300 h-20 px-6  py-4 space-y-2 pb-2 rounded-2xl'>
                    <h5 className='text-sm home-text font-semibold'>Wallet Balance</h5>
                    <div className='flex items-center justify-between'>
                      <h5 className='text-xl home-text font-semibold'>{"$1,200.00"}</h5>
                       <main className='flex items-center space-x-4'>
                         <h5 className='bg-white rounded-lg'><TbSend className='home-text text-3xl'/></h5>
                         <h5 className='bg-white rounded-lg'><TbArrowBarToDown className='home-text text-3xl '/></h5>
                       </main>
                    </div>
                </main>
            </div>
            <div>
              <main className='flex items-center justify-between pt-8'>
                <h5 className='home-text text-lg font-semibold'>Coins Balance</h5>
                <h5 className='bg-slate-300 rounded-md p-2'><GrFormAdd className='text-xl home-text'/></h5>
             </main>

             <div className='flex flex-col pt-4'>
              <main className='flex items-center space-x-8'>
                <h5 className='flex bg-slate-300 p-2 rounded-lg'>
                <img src={logo} alt="" className='h-8 w-8'/>
                <img src={logo2} alt="" className='-ml-6 h-8 w-8'/>
                </h5>
                <h5 className='text-lg home-text font-semibold'>KLV</h5>
                <h5 className='text-lg home-text font-semibold'>${"0.038894"}</h5>
                <h5 className='text-lg home-text font-semibold'>{"16,38894"}</h5>
              </main>

             </div>
            </div>

         </div>
    </Layout>
   
  )
}
