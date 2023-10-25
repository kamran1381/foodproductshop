import React from 'react'
import Piechart from '../circle diagram/piechart'
export default function Services({id , title , percentage , icon}) {
  return (
    <div className='p-1'>
      <div className='pt-2'>
        <Piechart percentage={percentage} icon={icon}/>
        <span>{title} : {percentage}</span>
      </div>
    </div>
  )
}
