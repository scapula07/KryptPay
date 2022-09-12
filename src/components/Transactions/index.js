import React from 'react'
import "../../pages/Home/home.css"

export default function Transactions({icon,title,date,amount}) {
  return (
    <div className='flex justify-between items-center bg-slate-300 px-4 rounded-xl py-2'>
        <main className='flex items-center space-x-4'>
           {icon}
            <div className='flex flex-col'>
                <h5 className='home-text'>{title}</h5>
                <h5 className='home-text'>{date}</h5>
            </div>
        </main>
        <h5 className='text-xl text-green-700'>{amount}</h5>

    </div>
  )
}
