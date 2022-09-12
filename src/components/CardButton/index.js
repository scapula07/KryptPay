import React from 'react'
import "../../pages/Home/home.css"

export default function CardButton({imgUrl,color,text}) {
  return (
    <div className={`flex flex-col ${color}  justify-center items-center px-3 py-6 space-y-0.5 rounded-2xl w-16 h-16`}>
       <img src={imgUrl} className="w-5 h-5"/>
       <h5 className='text-white'>{text}</h5>
      
    </div>
  )
}
