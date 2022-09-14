import React,{useState} from 'react'
import Layout from '../../Layout/layout'
import {Link} from "react-router-dom"
import {BsArrowRightShort} from "react-icons/bs"
import { collection, addDoc,getDoc,getDocs, doc } from "firebase/firestore"; 
import { query, where } from "firebase/firestore";  
import {coinbaseWallet ,ethereum ,web3 } from "../../coinbaseInitialization"
import {storeFiles,retrieveFile} from "../../web3StorageInvoice"
import {db} from "../../firebase"
import { WalletAccountState} from "../../RecoilState/globalState"
import { useRecoilValue } from 'recoil';
import {KLVAppcontract} from "../../kryptPayContractInstances"

export default function Methods() {
  const [proceed,setProceed] =useState(false)
  const [email,setEmail]=useState("")
  const [amount,setAmount]=useState("")
  const [receiver,setReceiver]=useState({})
  const walletAccount =useRecoilValue( WalletAccountState)



  const findEmail=async()=>{
    console.log("searching")
    const userRef = collection(db, "users");
    const usersQuery = query(userRef, where("email", "==", email));
    const userDocSnapshot =await getDocs(usersQuery)
     
     userDocSnapshot.docs.map((doc)=>{
      console.log(doc.data())
      //window.localStorage.setItem("currentUser",{...doc.data(),id:doc.id})
      setReceiver({...doc.data(),id:doc.id})
    })
  }

  const sendTx=async()=>{
    console.log("storing")
    const _to=receiver.address
    const _amount=web3.utils.toWei(amount,'ether')
    console.log(_to,_amount.at,"to n amount")
    try{
      const res =await  KLVAppcontract.methods.transfer(_to,_amount).send({from:walletAccount})
      console.log(res,res.transactionHash)
      const payload={
        transactionHash:res.transactionHash,
        amount:amount,
        to:receiver.email,
        from:email,
        date:new Date()
      }
       const cid = await storeFiles(payload,"john")
       console.log(cid,"cid")
       retrieveFile(cid)



     // toast.success("Bot started, Frontrunning uniswap.This might take a while!");
    }catch(e){
      console.log(e)
     // toast.error("Something went wrong!");
      }
 
   }

   
  
  
  
  return (
      <Layout>
        <div className='pt-10'>
           <div>
             <h5 className='text-xl home-text font-semibold'>{proceed===false?<>Methods</>:<>Confirm payment</>}</h5>
           </div>
            
            <>
            {proceed===false?
               <div className='flex flex-col items-center justify-center pt-20 space-y-4'>
               <main>
                 <Link to="/payment"> <h5 className='home-text flex items-center space-x-2'><span>Scan for QR Code</span> <BsArrowRightShort /></h5></Link>
               </main>
               <h5 className='home-text'>Or</h5>
               <main className='flex flex-col items-center'>
                  <h5 className='home-text'>Send via email</h5>

                  <div className="pt-10 space-y-16">
                    <main className='flex flex-col items-center space-y-0.5'>
                     <label className='flex flex-col space-y-1'>
                      <span className="home-text text-lg">Receiver's Email</span>
                      <div  className='flex items-center justify-between border border-blue-900  w-72 h-10 px-2 rounded-lg'>
                      <input 
                       className='h-full w-full outline-none border-0 px-2 rounded-lg text-slate-800'
                       type="text"
                       name="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                    
                      />
                       <span className='text-base home-text active:text-slate-500'
                        onClick={findEmail}
                       >Find</span>
                      </div>

                     </label>
                     {receiver.address?.length>0&&
                     <h5 className='text-right home-text text-sm w-72'>Wallet address: {receiver.address}</h5>
                      }
                     <label  className='flex flex-col space-y-1'> 
                     <span className="home-text text-lg"> Amount </span>
                    <div  className='flex items-center justify-between border border-blue-900  w-72 h-10 px-2 rounded-lg'>
                      <input 
                     className='h-full w-full outline-none border-0 px-2 rounded-lg text-slate-800'
                       type="text"
                       name="amount"
                       value={amount}
                       onChange={(e)=>setAmount(e.target.value)}

                       />
                      <span className='text-sm home-text'>KLV</span>
                     </div>
                  
                    </label>

                    </main>
                   
                    <main className='w-72'>
                      <button className='bg-blue-900 text-white w-full rounded-md h-8 text-lg' 
                      onClick={()=>setProceed(true)}>Proceed</button>
                       </main>
                    
                  </div>
                  

                 </main>
            


               </div>
               :
               <div className='flex flex-col items-center space-y-10 pt-20'>
                     <main className='flex flex-col items-cennter space-y-0.5'>
                        <h5 className='px-6 home-text'>Amount</h5>
                         <h5 className='text-2xl font-semibold home-text'>{amount} <span className='text-sm'>KLY</span></h5>
                        <h5 className='px-6 home-text'>${"40.43"}</h5>
                      
                      </main>  

                      <div className='flex flex-col space-y-56'>
                        <main className=' border-2 border-blue-900 px-4 py-4 w-80 rounded-xl'>
                           <div className='flex  justify-between items-center w-full'>
                             <main className='flex flex-col'>
                              <h5 className='text-slate-400'>Address</h5>
                              <h5 className='border-t-2 border-slate-300 home-text'>{receiver.email?.slice(0,9)+"..."}</h5>

                               </main>
                               <main>
                                <h5 className='home-text'>{[receiver.address?.slice(0,5)+"..."]}</h5>
                                 </main>
                              </div>
                               
                            </main>
                            <button className='bg-blue-900 w-full text-white py-1 rounded-lg '
                            onClick={sendTx}
                            >Continue</button>
                      </div> 

                  </div>
               }
               </>


          
        </div>
   
      </Layout>
  )
}
