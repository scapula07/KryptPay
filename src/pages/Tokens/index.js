import React ,{useState,useEffect}from 'react'
import Layout from '../../Layout/layout'
import {RiArrowDropDownLine} from "react-icons/ri"
import {FiSearch,FiArrowDown} from "react-icons/fi"
import {FaEthereum} from "react-icons/fa"
import {BsCurrencyBitcoin} from "react-icons/bs"
import usdt from "../../assests/usdt.png"
import bnb from "../../assests/bnb.png"
import mainlogo from "../../assests/mainlogo.png"
import aave from "../../assests/aave.png"
import {Link} from "react-router-dom"
import Fuse from "fuse.js"
import { collection, onSnapshot, doc } from 'firebase/firestore'
import { db } from "../../firebase"


export default function Tokens() {
        const [Tokens,setToken]=useState([])
        const [query,setQuery]=useState("")

        useEffect(() => {
          const fetch = async () => {
              onSnapshot(collection(db, "tokens"), (snapshot) => {
                setToken(snapshot.docs.map((doc) => {
                      console.log(doc.data())
                      return { ...doc.data(), id: doc.id }
                  }))
              });
            }
          fetch()
      }, [])
      const fuse =new Fuse(Tokens,{
        keys:["name","symbol"]
      })
      const result=fuse.search(query)
      console.log(result)

  return (
    <Layout >
        <div className='pt-14'>
           <div>
         
            <h5 className='text-xl home-text font-semibold'>Tokems</h5>
          </div>
          <div className="flex items-center w-full space-x-4 py-4 ">
             <RiArrowDropDownLine className='text-3xl text-slate-800' />
            <main className='flex space-x-4 items-center  h-11 px-4 rounded-2xl bg-slate-200 w-5/6'>
                <FiSearch className='text-lg text-slate-700'/>
                <input 
                className='h-full  bg-slate-200 text-slate-700 outline-none border-0'
                placeholder='Search token'
                onChange={(e)=>setQuery(e.target.value)}
                />
              </main>
            </div>


            <div className='px-4 py-2'>
            <div className='border border-slate-400 py-2 px-6 shadow-lg rounded-lg'>
                 <h5 className='text-slate-500'>Common bases</h5>
                <div className='grid grid-flow-row grid-cols-3 gap-x-6 gap-y-2 py-4'>
                    <Link to="/method/bnb"
                       state={{
                        token:"bnb"
                    }}
                    >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-yellow-500 rounded-full p-1'>
                      <img src={bnb} />
                    </div>
                    
                     <h5 className='font-semibold'>BNB</h5>
                   </main>
                   </Link>
                   <Link
                     to="/method/usdt" 
                     state={{
                      token:"usdt"
                  }}
                   >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-green-500 rounded-full p-0.5'>
                      <img src={ usdt} />
                    </div>
                    
                     <h5 className='font-semibold'>USDT</h5>
                   </main>
                   </Link>
                   <Link
                      to="/method/eth" 
                      state={{
                       token:"eth"
                   }}
                     >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-slate-300 rounded-full p-1'>
                      <FaEthereum />
                    </div>
                    
                     <h5 className='font-semibold'>ETH</h5>
                   </main>
                   </Link>
                   <Link
                      to="/method/btc"
                      state={{
                       token:"btc"
                   }}
                     >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-yellow-500 rounded-full p-1'>
                      <BsCurrencyBitcoin className='text-white'/>
                    </div>
                    
                     <h5 className='font-semibold'>BTC</h5>
                   </main>
                   </Link>
                   <Link
                      to="/method/klv"
                      state={{
                       token:"klv"
                   }}
                      >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-slate-200 rounded-full p-1'>
                    <img src={mainlogo } className="h-4 w-4"/>
                    </div>
                    
                     <h5 className='font-semibold'>KLV</h5>
                   </main>
                   </Link>
                   <Link
                       to="/method/aave"
                       state={{
                        token:"aave"
                    }}
                     >
                   <main  className='flex items-center space-x-1'>
                    <div className='bg-green-500 rounded-full p-1'>
                    <img src={ aave } />
                    </div>
                    
                     <h5 className='font-semibold'>AAVE</h5>
                   </main>
                   </Link>

                </div>

            </div>


            </div>

            <div className='flex flex-col py-6'>
                <main className='flex items-center justify-between px-4'>
                    <h5 className='text-lg font-semibold'>Token name</h5>
                    <FiArrowDown className='text-lg font-semibold' />
                </main>

                {result.length>1&&
                 <div className='flex flex-col space-y-4 px-4 py-4'>
                  {
                    result.splice(0,8).map((res)=>{
                      console.log(res.name,res.symbol)
                      return(
                        <Link to={`/method/${res.item.symbol}`}  >
                           <main className="flex space-x-2 items-center ">
                           <img src={res.item.imgUrl} className="h-6 w-6 rounded-full"/>
                           <span className='font-semibold' >{res.item.symbol}</span>
                         
                           </main>
                              
                            
                        
                        </Link>
                      )
                    })
                  }
                  
                </div>

                  }
                  </div>
                

        </div>
    </Layout>
   
  )
}
