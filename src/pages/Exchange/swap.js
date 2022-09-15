import React,{useState} from 'react'
import mainlogo from "../../assests/mainlogo.png"
import {MdSwapVert} from "react-icons/md"
import {FaEthereum} from "react-icons/fa"
import { WalletAccountState} from "../../RecoilState/globalState"
import { useRecoilValue } from 'recoil';
import {KLVAppcontract} from "../../kryptPayContractInstances"
import {coinbaseWallet ,ethereum ,web3 } from "../../coinbaseInitialization"
import {storeFiles,retrieveFile} from "../../web3StorageInvoice"
import TransactionDetails from '../../components/TransactionDetails'
import { currentUserState} from "../../RecoilState/globalState"


export default function Swap() {

            const currentUser=useRecoilValue( currentUserState)
            const walletAccount =useRecoilValue( WalletAccountState)
            const [klvAmount,setKlvAmount] =useState("")
            const [ethAmount,setEthAmount]=useState("")
            const [txHash,setHash] =useState("")
            const [cid,setCid]=useState("")
            const [txPayload,setPayload]=useState({})

            const handleSwapConversion=(e)=>{
               setKlvAmount(e.target.value)
               setEthAmount(Number(klvAmount)/4)
               }
           
               console.log(klvAmount,"klv")

          const closeTx=()=>{
         setHash("")
                 }


            const swapTx=async()=>{
               console.log("starting swap")
               
               const _amount=web3.utils.toWei(klvAmount,'ether')
               console.log(_amount,"to n amount")
               try{
               const res =await  KLVAppcontract.methods.swapTokens(_amount).send({from:walletAccount})
               console.log(res,res.transactionHash)
               setHash(res.transactionHash)
               const payload={
                  transactionHash:res.transactionHash,
                  amount:klvAmount,
                  event:"swap",
                  senderEmail:currentUser.email,
                  date:new Date()
               }
               setPayload(payload)
                  const cid = await storeFiles(payload,"john")
                  setCid(cid)
                  console.log(cid,"cid")
                  retrieveFile(cid)
         
         
         
               // toast.success("Bot started, Frontrunning uniswap.This might take a while!");
               }catch(e){
               console.log(e)
               // toast.error("Something went wrong!");
               }
            
            }

  return (
            <div className=''> 
               <div className='flex flex-col items-center space-y-6 bg-slate-300 h-80 rounded-lg w-80 px-4 py-4'>
               {txHash.length===0&&
                    <>
                  <main className='flex flex-col'>
                     <h5 className='text-lg font-semibold'>Swap from:</h5>
                     <div className='flex space-x-4 items-center pt-2'>
                        <div className='flex space-x-2  items-center'>
                         <h5 className='bg-white rounded-full p-1 w-6 h-6'>
                           <img src={mainlogo } alt="" className='w-4 h-4 '/>
                        </h5>
                        <h5 className='text-sm font-semibold'>KLV</h5>
                        </div>
                        <>
                           <input 
                            className='bg-slate-200 px-4 py-1 rounded-lg border-0 outline-none'
                            placeholder='0.0'
                            name="klvAmount"
                            value={klvAmount}
                            onChange={handleSwapConversion}
                           
                           />
                        
                        </>

                     </div>
                  </main>
                    <h5 className='bg-slate-200 p-1 w-8 h-8 flex '>
                     <MdSwapVert className='text-xl home-text font-semibold'/>
                    </h5>
                    <main className='flex flex-col'>
                     <h5 className='text-lg font-semibold'>Swap to:</h5>
                     <div className='flex space-x-4 items-center py-2'>
                        <div className='flex space-x-2  items-center'>
                         <h5 className='bg-white rounded-full p-1 w-6 h-6'>
                           <FaEthereum alt="" className='w-4 h-4 '/>
                        </h5>
                        <h5 className='text-sm font-semibold'>ETH</h5>
                        </div>
                        <>
                           <input 
                            className='bg-slate-200 px-4 py-1 rounded-lg border-0 outline-none'
                            placeholder='0.0'
                            name='ethAmount'
                            value={ethAmount}
                           
                           />
                        
                        </>
                  </div>
                  </main>

                  <button className='w-full bg-white home-text rounded-xl py-1 active:bg-blue-900 active:text-white'
                  onClick={swapTx}
                  
                  >Swap Tokens</button>
                    </>
                   }
                   {txHash.length  >1&&
                       <>
                 <TransactionDetails payload={txPayload} cid={cid} closeTx={closeTx}/>
                    </>

       }
               </div>  
                
                
            </div>
  )
}
