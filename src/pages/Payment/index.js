import React,{useState} from 'react'
import "../Home/home.css"
import {AiOutlineCamera} from "react-icons/ai"
import Scanner from '../../components/Scanner'
import Layout from '../../Layout/layout'

export default function Payment() {
    const [cameraAccess,setAccess]=useState(false)
    const [scanned,setScanned] =useState(false)
  return (
    <Layout>
    <div className='pt-24'>
        <div>
         
            <h5 className='text-xl home-text font-semibold'> {scanned===false?<>Scan Paycode</>:<>Confirm payment</>}</h5>
        </div>
        
        <div className='pt-20 px-8 flex flex-col items-center space-y-2'>
           {scanned===true?
             <>
             <Scanner >
              {cameraAccess===false?(
               <div className='bg-slate-300 flex flex-col items-center justify-center h-64 m-6 space-y-3'>
                   <AiOutlineCamera className='text-white text-2xl'/>
                  <p className='text-white px-4'>Kryptpay requires access to your camera</p>
                  
                  <main className='flex items-center space-x-5'>
                    <button className='rounded-full border border-blue-900 py-3 px-6  text-sm text-white'>Deny</button>
                    <button className='rounded-full bg-blue-900 py-3 px-6  text-sm text-white '>Allow</button>
                  </main>

                 </div>
              )
                   :
                   <div className='h-64 m-4'>

                   </div>
                    }
                </Scanner>
                
                {cameraAccess===true&& 
                <h5 className='home-text'>Scan QR code to Send and pay</h5>}
                </>
                :
                <div className='flex flex-col items-center space-y-10'>
                  <main className='flex flex-col items-cennter space-y-0.5'>
                    <h5 className='px-6 home-text'>Amount</h5>
                    <h5 className='text-2xl font-semibold home-text'>{"1,032.69"} <span className='text-sm'>KLY</span></h5>
                    <h5 className='px-6 home-text'>${"40.43"}</h5>
                     
                  </main>
                  <div className='flex flex-col space-y-56'>
                  <main className=' border-2 border-blue-900 px-4 py-4 w-80 rounded-xl'>
                      <div className='flex  justify-between items-center w-full'>
                        <main className='flex flex-col'>
                          <h5 className='text-slate-400'>Address</h5>
                          <h5 className='border-t-2 border-slate-300 home-text'>{"jumia stores"}</h5>

                        </main>
                        <main>
                          <h5 className='home-text'>["[Klv45u...rtyxcv]"]</h5>
                        </main>
                         
                      </div>
                      
                  </main>
                  <button className='bg-blue-900 w-full text-white py-1 rounded-lg '>Continue</button>
                  </div>
                    
                


                </div>
             }
             </div>


    </div>
    </Layout>
  )
}
