import React from 'react'
import Transactions from "../../components/Transactions"
import Layout from '../../Layout/layout'
import { useState } from "react"
import {AiOutlineWifi } from "react-icons/ai"

export default function TransactionHistory() {
    const [TransactionData,setTxData]=useState([1,2,3,4,5,6,7])
  return (
    <Layout>
    <div>
          <div className='pt-14'>
             <h5 className='text-xl home-text font-semibold'>Transaction History</h5>
           </div>

           <div className='flex flex-col space-y-4 pt-8'>
           {TransactionData.map((tx)=>{
                    return(
                        <Transactions 
                         icon={<AiOutlineWifi className='text-2xl home-text'/>}
                          title={"Sabar Convenient store"}
                          date={"22 September 2021"}
                          amount={"$22"}

                        />
                    )
                })

                }

           </div>
    </div>
    </Layout>
  )
}
