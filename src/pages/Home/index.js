import React from 'react'
import "./home.css"
import CardButton from '../../components/CardButton'
import swap from "../../assests/swap.png"
import recieve from "../../assests/recieve.png"
import send from "../../assests/send.png"
import scan from "../../assests/scan.png"
import water from "../../assests/water.png"
import power from "../../assests/power.png"
import wifi from "../../assests/wifi.png"
import cable from "../../assests/cable.png"
import mobile from "../../assests/mobile.png"
import health from "../../assests/health.png"
import grocery from "../../assests/grocery.png"
import {GoKebabVertical} from "react-icons/go"
import Transactions from '../../components/Transactions'
import {AiOutlineWifi} from "react-icons/ai"
import { useRecoilValue } from 'recoil';
import {HiOutlineShoppingCart} from "react-icons/hi"
import Layout from '../../Layout/layout'
import { WalletAccountState} from "../../RecoilState/globalState"
import { currentUserState} from "../../RecoilState/globalState"

export default function Home() {
    const currentUser=useRecoilValue( currentUserState)
    const walletAccount=useRecoilValue(WalletAccountState)

  return (
    <Layout >
    <div className='pt-16'>

        <div className=''>
            <main className='flex flex-col bg-slate-300 h-20 px-6  py-4 space-y-2 pb-2 rounded-2xl'>
                <h5 className='text-sm home-text font-semibold'>Wallet Balance</h5>
                <h5 className='text-xl home-text font-semibold'>{"$1,200.00"}</h5>

            </main>
             <main className='flex justify-around pt-6'>
                {Actions.map((action)=>{
                   return(
                     <CardButton 
                    text={action.text}
                    imgUrl={action.imgUrl}
                    color={action.color}
                    linkUrl={action.linkUrl}
                     />
                   )
                  
                })

                }
                
 
             </main>
           <main className='pt-8'>
             <div className='flex justify-between px-1'>
                <h5 className='text-lg home-text font-semibold'>Payments</h5>
                <h5 className='text-lg home-text font-semibold'>See More</h5>
             </div>

              <div>
                <div className='grid grid-flow-row grid-cols-4 gap-x-8 gap-y-10 py-4'>
                   {Tags.map((tag)=>{
                    return(
                        <CardButton 
                        text={tag.text}
                        imgUrl={tag.imgUrl}
                        color={tag.color}
                        linkUrl={tag.linkUrl}
                         />
                    )
                   })

                   }
                </div>

              </div>
             
          </main>

          <main className='pt-5'>
             <div className='flex justify-between items-center'>
                <h5 className='home-text text-lg font-semibold'>Transactions</h5>
                <GoKebabVertical className='text-lg home-text' />
             </div>

             <div className='flex flex-col space-y-4 pt-8'>
                
                {TransactionData.map((tx)=>{
                    return(
                        <Transactions 
                          icon={tx.icon}
                          title={tx.title}
                          date={tx.date}
                          amount={tx.amount}
                        />
                    )
                })

                }

             </div>

          </main>
        </div>

    </div>
    </Layout>
  )
}


const Actions=[
    {
        text:"Send",
        imgUrl:send,
        color:"cardBtn-color",
        linkUrl:"send"

    },
    {
        text:"Receive",
        imgUrl:recieve ,
        color:"cardBtn-color",
        linkUrl:"receive"

    },
    {
        text:"Exchange",
        imgUrl:swap ,
        color:"cardBtn-color",
        linkUrl:"exchange/purchase"

    },
    {
        text:"Scan",
        imgUrl:scan ,
        color:"cardBtn-color",
        linkUrl:"home"

    }

]


const Tags=[
    {
        text:"Water",
        imgUrl:water,
        color:"water-color",
        linkUrl:"home"

    },
    {
        text:"Power",
        imgUrl:power ,
        color:"power-color",
        linkUrl:"home"

    },
    {
        text:"Wi-Fi",
        imgUrl:wifi ,
        color:"wifi-1",
        linkUrl:"home"

    },
    {
        text:"Cable",
        imgUrl:cable ,
        color:"cable-color",
        linkUrl:"home"

    },
    {
        text:"Recharge",
        imgUrl:cable ,
        color:"recharge-color",
        linkUrl:"home"

    },

    {
        text:"Health",
        imgUrl:health ,
        color:"health-color",
        linkUrl:"home"

    },

    
    {
        text:"Grocery",
        imgUrl:grocery ,
        color:"grocery-color",
        linkUrl:"home"

    },

    {
        text:"Wi-Fi",
        imgUrl:wifi ,
        color:"wifi-2",
        linkUrl:"home"

    },


]

const TransactionData=[
    {
       icon:<AiOutlineWifi className='text-2xl home-text'/>,
        title:"Sabar Convenient store",
        date:"22 September 2021",
        amount:"$22"

    },
    {
       icon:<HiOutlineShoppingCart className='text-2xl home-text'/>,
        title:"Act Wi-Fi Bill",
        date:"14 September 2021",
        amount:"$120"

    }
]