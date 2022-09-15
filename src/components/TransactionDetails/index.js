import React from 'react'
import {GrFormClose} from "react-icons/gr"
import {BsBoxArrowUpRight} from "react-icons/bs"
import txSuccess from "../../assests/txsuccess.png"

export default function TransactionDetails({payload,cid,closeTx}) {
  return (
    <div className='w-full'>
        <div className='w-full '>
           <GrFormClose className='text-lg font-semibold home-text' onClick={closeTx}/>
        </div>
          <main className='flex justify-center py-6'>
            <img src={txSuccess} className="w-20 w-20" alt=""/>
          </main>
         <h5 className='text-center text-slate-600 font-semibold '>Transaction Details</h5>
         <div className='flex flex-col space-y-1 pt-2'>
            <h5 className='text-slate-600 flex flex-col border border-slate-700 rounded-lg px-2 py-1'>
               <span>Transaction  </span> <span className='flex justify-end'>{payload?.transactionHash?.slice(0,9)+".."+payload?.transactionHash?.slice(-4)}
            </span>
            </h5>
            <h5 className='text-slate-600 flex flex-col border border-slate-700  rounded-lg px-2 py-1'><span>Transaction type</span> <span  className='flex justify-end'>{payload?.event}</span></h5>
            <h5 className='text-slate-600 flex flex-col border border-slate-700  rounded-lg px-2 py-1'>
               <span>Sender's email:</span>
               <span className='flex justify-end'>{payload?.senderEmail?.slice(0,9)+".."+payload?.senderEmail?.slice(-4)}</span></h5>
            <h5 className='text-slate-600 flex flex-col border-slate-700  border rounded-lg px-2 py-1'>
               <span>Recipient's email</span>
               <span className='flex justify-end'>{payload?.recipientEmail?.slice(0,9)+".."+payload?.recipientEmail?.slice(-4)}</span></h5>
            <h5 className='text-slate-600 flex-col border border-slate-700 rounded-lg px-2 py-1'>
               <span>CID</span>
               <span  className='flex justify-end'>{cid?.slice(0,11)+".."}</span></h5>
         </div>
         <h5 className='flex items-center space-x-4 pt-6'>
            <span className='home-text font-bold'>Receipt</span>
             <BsBoxArrowUpRight className='home-text font-bold'/>
             </h5>
    </div>
  )
}
