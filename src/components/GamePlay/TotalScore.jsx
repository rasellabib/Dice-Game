import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div>
        <p className='text-[100px] font-extrabold'>
            {score} 
        </p>
        <p className='text-[24px] font-bold'>
            Total Point
        </p>
        
    </div>
  )
}

export default TotalScore