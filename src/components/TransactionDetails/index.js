import React from 'react'
import {GrFormClose} from "react-icons/gr"
import {BsBoxArrowUpRight} from "react-icons/bs"

export default function TransactionDetails({payload,cid,closeTx}) {
  return (
    <div className='w-full'>
        <div className='w-full '>
           <GrFormClose className='text-lg font-semibold home-text' onClick={closeTx}/>
        </div>
         <h5 className='text-center text-slate-600 font-semibold '>Transaction Details</h5>
         <div className='flex flex-col space-y-1 pt-2'>
            <h5 className='text-slate-600'>Transaction hash:{payload?.transactionHash?.slice(0,9)+".."}</h5>
            <h5 className='text-slate-600'>Transaction type:{payload?.event}</h5>
            <h5 className='text-slate-600'>Sender's email:{payload?.senderEmail?.slice(0,9)+".."}</h5>
            <h5 className='text-slate-600'>Recipient's email:{payload?.recipientEmail?.slice(0,9)+".."}</h5>
            <h5 className='text-slate-600'>CID:{cid?.slice(0,11)+".."}</h5>
         </div>
         <h5 className='flex items-center space-x-4 pt-6'>
            <span className='home-text font-bold'>Receipt</span>
             <BsBoxArrowUpRight className='home-text font-bold'/>
             </h5>
    </div>
  )
}
