import React,{useEffect,useState} from 'react'
import Layout from '../../Layout/layout'
import {TbSend,TbArrowBarToDown} from "react-icons/tb"
import {GrFormAdd} from "react-icons/gr"
import logo from "../../assests/mainlogo.png"
import logo2 from "../../assests/logo2.png"
import {KLVTokencontract} from "../../kryptPayContractInstances"
import { useRecoilValue } from 'recoil'
import { WalletAccountState} from "../../RecoilState/globalState"
import { currentUserState} from "../../RecoilState/globalState"
import {coinbaseWallet ,ethereum ,web3 } from "../../coinbaseInitialization"
import {Link} from "react-router-dom"

export default function Portfolio() {
  const walletAccount =useRecoilValue(WalletAccountState)
  console.log(walletAccount,"port")
  const [Balance,setBalance]=useState("0.0")
  useEffect(()=>{
    if(window.ethereum){
    const getBalance=async()=>{
       const balance = await KLVTokencontract.methods.balanceOf(walletAccount).call()
       console.log(balance,"balalalalla")
       setBalance(Number(web3.utils.fromWei(balance, "ether")))
     }

     getBalance()
   }
  },[])
//    

  return (
    <Layout>
         <div  className='pt-14'>
           <div>
              <h5 className='text-xl home-text font-semibold'>Portfolio</h5>
           </div>

           <div className='pt-4'>
                <main className='flex flex-col bg-slate-300 h-20 px-6  py-4 space-y-2 pb-2 rounded-2xl'>
                    <h5 className='text-sm home-text font-semibold'>Wallet Balance</h5>
                    <div className='flex items-center justify-between'>
                      <h5 className='text-xl home-text font-semibold'>{Balance} <span className='text-sm'>KLV</span></h5>
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
