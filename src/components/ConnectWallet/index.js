import React from 'react'
import {useRecoilState, useRecoilValue,useRedoilState} from "recoil"
import {BsWallet2} from "react-icons/bs"
import {web3State,EthereumState} from "../../RecoilState/globalState"
import {coinbaseWallet ,ethereum ,web3 } from "../../coinbaseInitialization"
import {WalletAccountState} from "../../RecoilState/globalState"


export default function ConnectWallet() {
   const [Account,setAccount]=useRecoilState(WalletAccountState)
  

   const connectWallet=async ()=>{
    
      console.log("Connecting wallet")

      try{
        const account =await ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((accounts)=>setAccount(accounts[0]))
            .catch((e)=>{
              console.log(e)
            })
      }catch(e){
        console.log(e)
      }
   }
   console.log(Account,"account")
  return (
    <>
       <BsWallet2 className='text-4xl home-text hover:text-2xl active:text-3xl' 
         onClick={connectWallet}
       />
    </>
  )
}
