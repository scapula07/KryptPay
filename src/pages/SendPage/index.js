import React from 'react'
import Layout from '../../Layout/layout'
import {RiArrowDropDownLine} from "react-icons/ri"
import {FiSearch,FiArrowDown} from "react-icons/fi"
import {FaEthereum} from "react-icons/fa"
import {BsCurrencyBitcoin} from "react-icons/bs"
import usdt from "../../assests/usdt.png"
import bnb from "../../assests/bnb.png"
import bit from "../../assests/bit.png"
import aave from "../../assests/aave.png"

export default function Send() {
  return (
    <Layout >
        <div className='pt-10'>
           <div>
         
            <h5 className='text-xl home-text font-semibold'>Send</h5>
          </div>
          <div className="flex items-center w-full space-x-4 py-4 ">
             <RiArrowDropDownLine className='text-3xl text-slate-800' />
            <main className='flex space-x-4 items-center  h-11 px-4 rounded-2xl bg-slate-200 w-5/6'>
                <FiSearch className='text-lg text-slate-700'/>
                <input 
                className='h-full  bg-slate-200 text-slate-700 outline-none border-0'
                placeholder='Search token'
                />
              </main>
            </div>


            <div className='px-4 py-2'>
            <div className='border border-slate-400 py-2 px-6 shadow-lg rounded-lg'>
                 <h5 className='text-slate-500'>Common bases</h5>
                <div className='grid grid-flow-row grid-cols-3 gap-x-6 gap-y-2 py-4'>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-yellow-500 rounded-full p-1'>
                      <img src={bnb} />
                    </div>
                    
                     <h5 className='font-semibold'>BNB</h5>
                   </main>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-green-500 rounded-full p-0.5'>
                      <img src={ usdt} />
                    </div>
                    
                     <h5 className='font-semibold'>USDT</h5>
                   </main>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-slate-300 rounded-full p-1'>
                      <FaEthereum />
                    </div>
                    
                     <h5 className='font-semibold'>ETH</h5>
                   </main>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-yellow-500 rounded-full p-1'>
                      <BsCurrencyBitcoin className='text-white'/>
                    </div>
                    
                     <h5 className='font-semibold'>BTC</h5>
                   </main>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-blue-500 rounded-full p-1'>
                    <img src={bit} />
                    </div>
                    
                     <h5 className='font-semibold'>BFG</h5>
                   </main>
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-green-500 rounded-full p-1'>
                    <img src={ aave } />
                    </div>
                    
                     <h5 className='font-semibold'>AAVE</h5>
                   </main>

                </div>

            </div>


            </div>

            <div className='flex flex-col py-6'>
                <main className='flex items-center justify-between px-4'>
                    <h5 className='text-lg font-semibold'>Token name</h5>
                    <FiArrowDown className='text-lg font-semibold' />
                </main>
            </div>
          

        </div>
    </Layout>
   
  )
}
