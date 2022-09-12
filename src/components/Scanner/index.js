import React from 'react'
import left from "../../assests/left.png"
import right1 from "../../assests/right1.png"
import left2 from "../../assests/left2.png"
import right2 from "../../assests/right2.png"

export default function Scanner({children}) {
  return (
    <div>
         <main className='flex items-center justify-between'>
                <img src={left }/>
                <img src={right1}/>
            </main>
             <div>
                {children}
             </div>

            <main className='flex items-center justify-between'>
                <img src={left2 }/>
                <img src={right2}/>
            </main>

    </div>
  )
}
