import React from 'react'
import Leftside from './Leftside'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import Rightbar from './Rightbar'


function Home() {

  return (
    <div className=' flex justify-between  mx-32   '>

        <Leftside/>
        <Outlet/>
        <Rightbar/>
        
    </div>

  
  )
}

export default Home


