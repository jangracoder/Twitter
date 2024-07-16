import React from 'react'
import Leftside from './Leftside'
import Feed from './Feed'
import Rightbar from './Rightbar'

function Home() {
  return (
    <div className='flex justify-between mx-32 '>

        <Leftside/>
        <Feed/>
        <Rightbar/>
        
    </div>
  )
}

export default Home


