import React from 'react'
import Createpost from './Createpost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[60%] border-l '> 
    <Createpost/>
   <Tweet/>
  
    </div>
  )
}

export default Feed