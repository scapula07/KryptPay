import React from 'react'
import {useRecoilValue} from "recoil"
import {BsWallet2} from "react-icons/bs"
import {web3State,EthereumState} from "../../RecoilState/globalState"
import {coinbaseWallet ,ethereum ,web3 } from "../../coinbaseInitialization"

export default function ConnectWallet() {
   
  

   const connectWallet=async ()=>{
    
      console.log("Connecting wallet")

      try{
        const account =await ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((accounts)=>console.log(accounts[0]))
            .catch((e)=>{
              console.log(e)
            })
      }catch(e){
        console.log(e)
      }
   }
   
  return (
    <>
       <BsWallet2 className='text-4xl home-text hover:text-2xl active:text-3xl' 
         onClick={connectWallet}
       />
    </>
  )
}
