import React from 'react'
import Layout from '../../Layout/layout'
import {Link,Outlet} from "react-router-dom"

export default function Exchange() {

  return (
    <Layout >
      <div>
           <div  className='pt-10'>
             <h5 className='text-xl home-text font-semibold'>Exchange</h5>
           </div>
            
            <div className='pt-10'>
                <main className='flex items-center justify-center space-x-8'>
                   <Link to="purchase"><button className='home-text border active:bg-blue-600 active:text-white px-3 py-1 font-semibold rounded-lg border-blue-900'>Purchase</button></Link>
                   <Link to="swap"><button className='home-text border  active:bg-blue-600 active:text-white  px-3 py-1  font-semibold  rounded-lg border-blue-900'>Swap</button></Link>
                </main>
                <main className='flex flex-col items-center pt-6 w-full'>
                    <Outlet />

                </main>


            </div>

      </div>
    </Layout>
  )
}
