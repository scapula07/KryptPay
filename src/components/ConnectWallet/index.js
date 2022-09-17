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


            ethereum.request({
              method: "wallet_watchAsset",
              params: {
                type: "ERC20",
                options: {
                  address: "0xE09Aa821C1480aE46364583563a500f1288f5E7D",
                  symbol: "KLV",
                  decimals: 18,
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/kryptpay-f5b8a.appspot.com/o/mainlogo.png?alt=media&token=0ac99a8a-e9ba-4b80-ab69-16ff3af34f37",
                },
              },
            })
            .then(response => {
              const result =
              result ? onApproveWatchAsset() : onDenyWatchAsset()
            })
            .catch(err => onError(err.message));
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
