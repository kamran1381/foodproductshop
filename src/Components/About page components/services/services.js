import React from 'react'
import Piechart from '../circle diagram/piechart'
export default function Services({ id, title, percentage, icon }) {
  return (
    <div className='p-1'>
      <div className='pt-2'>
        <Piechart percentage={percentage} icon={icon} />
        <div className='py-2 text-center'>
        <span>{title} : {percentage}</span>
        <p className='pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed ligula. Vivamus purus odio, mollis.
        </p>
        </div>
       
      </div>
    </div>
  )
}
