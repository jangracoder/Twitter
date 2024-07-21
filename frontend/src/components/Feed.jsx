import React from 'react'
import Createpost from './Createpost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[50%] '> 
    <Createpost/>
   <Tweet/>
  
    </div>
  )
}

export default Feed