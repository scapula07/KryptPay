import React from 'react'
import {useRecoilValue} from "recoil"
import {BsWallet2} from "react-icons/bs"
import {web3State,EthereumState} from "../../RecoilState/globalState"
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'
import Web3Modal from "web3modal";


export default function ConnectWallet() {
  const providerOptions = {
   
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "KryptPay", // Required
        infuraId: "a5b2c7fb4bb14412832e0fad444661dd" , // Required
        // rpc: "https://mainnet.infura.io/v3/a5b2c7fb4bb14412832e0fad444661dd", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 1, // Optional. It defaults to 1 if not provided
        darkMode: false // Optional. Use dark theme, defaults to false
      }
    }
  }

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: false, // optional
      disableInjectedProvider:false,
      providerOptions// required
    
    });

    // let instance;
    // let web3 ;

    const connectWallet =async()=>{
      console.log("connecting")
       const instance = await web3Modal.connect();
      console.log(instance,"instance")
      const  web3 =new Web3(instance)
      console.log(web3,"weeeb")
      const accounts = await web3.eth.getAccounts();
      console.log(accounts)
    
      // setAccount(accounts[0])
      
    }

   
  return (
    <>
       <BsWallet2 className='text-4xl home-text hover:text-2xl active:text-3xl' 
         onClick={connectWallet}
       />
    </>
  )
}
