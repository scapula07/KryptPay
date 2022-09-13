import React from 'react'
import Layout from "../../Layout/layout"
import {BsWallet2} from "react-icons/bs"
import {FaAngleRight} from "react-icons/fa"
import {FiHelpCircle} from "react-icons/fi"
import {MdOutlineEdit,MdOutlineDeleteOutline,MdOutlineToggleOff,MdOutlinePrivacyTip,MdTagFaces} from "react-icons/md"
import txImg from "../../assests/tx.png"
import {RiShieldCheckLine} from "react-icons/ri"
import {HiOutlineCurrencyDollar,HiOutlineMoon,HiOutlineFaceSmile} from "react-icons/hi"

export default function Settings() {
  return (
    <Layout>
        <div>
           <div className='pt-10'>
             <h5 className='text-xl home-text font-semibold'>Account</h5>
           </div>

           <div className='pt-6 '>
              <h5 className='text-sm home-text' >Account</h5>
              <div className='flex flex-col pt-2'>
                 <main className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <BsWallet2 className='home-text text-xl font-semibold'/>
                       <h5 className='flex flex-col -space-y-1'>
                        <span className='text-base home-text'>{"0xf033663783993"}</span>
                        <span className='text-sm font-semibold home-text' >Preferred Address </span>
                        </h5>
                    </div>
                     <div className='flex space-x-3'>
                        <h5 className='rounded-lg bg-slate-300 p-1 '>
                        <MdOutlineEdit className='text-lg home-text'/>
                        </h5>
                        <h5 className='rounded-lg bg-slate-300  p-1'>
                        <MdOutlineDeleteOutline className='text-lg home-text'/>
                        </h5>
                     </div>
                 </main>
                  
                       <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <img src={txImg } className="" alt=""/>
                           <h5 className='text-base home-text font-semibold'>Transaction history </h5>
                        </main>

                        <main>
                           <FaAngleRight className="text-xl home-text" />
                        </main>
                      
                        
                        </div>

                        
                       <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <HiOutlineCurrencyDollar className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Currency </h5>
                        </main>

                        <main>
                           <FaAngleRight className="text-xl home-text" />
                        </main>
                      
                        
                        </div>

                        <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <HiOutlineMoon className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Light Mode</h5>
                        </main>

                        <main>
                           <MdOutlineToggleOff className="text-3xl home-text" />
                        </main>
                      
                        
                        </div>
              </div>

              <div className='pt-6 '>
                 <h5 className='text-sm home-text' >Security</h5>

                 <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <RiShieldCheckLine className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Create pin </h5>
                        </main>

                        <main>
                           <FaAngleRight className="text-xl home-text" />
                        </main>
                      
                        
                 </div>

                 <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <MdTagFaces className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Activate face unlock </h5>
                        </main>

                        <main>
                          <MdOutlineToggleOff className="text-3xl home-text" />
                        </main>
                      
                        
                 </div>


              </div>
             </div>
              
             <div className='pt-6 '>
                 <h5 className='text-sm home-text' >Support </h5>
                 
                 <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <FiHelpCircle className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Create pin </h5>
                        </main>

                        <main>
                           <FaAngleRight className="text-xl home-text" />
                        </main>
                      
                        
                 </div>

                 <div className='pt-10 flex justify-between items-center'>
                        <main className='flex items-center space-x-4'>
                           <MdOutlinePrivacyTip className='home-text text-2xl font-semibold'/>
                           <h5 className='text-base home-text font-semibold'>Privacy policy</h5>
                        </main>

                        <main>
                           <FaAngleRight className="text-xl home-text" />
                        </main>
                      
                        
                 </div>
            </div>
        </div>
    </Layout>
  )
}
