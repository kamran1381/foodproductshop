import React from 'react'
import './about.css'
import Services from '../../Components/About page components/services/services'
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Icons from '../../Components/About page components/icons/Icons';

export default function About() {
  const serviceinfo = [{ id: 1, title: 'Branding & Identity', percentage: 85 , icon : <VisibilityIcon style={{fontSize : '40px'}}/> }
    , { id: 2, title: 'Marketing', percentage: 60  , icon : <LocalShippingIcon style={{fontSize : '40px'}}/>},
  { id: 3, title: 'User Interface Design', percentage: 75 , icon : <PaymentsIcon style={{fontSize : '40px'}}/> }, { id: 4, title: 'Project Management', percentage: 80 , icon : <InsertEmoticonIcon style={{fontSize : '40px'}}/>},
  { id: 5, title: 'Logistics', percentage: 50  , icon : <AccountTreeIcon style={{fontSize : '40px'}}/> }, { id: 6, title: 'Photography', percentage: 95 , icon : <CameraAltIcon style={{fontSize : '40px'}}/> }]
  return (
    <div>
       <div className='bg-[#FBFBFB]'><h2 className='py-6 px-3'>About Us</h2></div>
      <div className=' our-mission-container mt-4 bg-white '>
        <h1 className='text-black text-center text-lg'>our mission</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class=" p-4"><p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed ligula. Vivamus purus odio, mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.
            Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed.

          </p></div>
          <div class=" p-4">
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed ligula. Vivamus purus odio, mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.
              Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed.

            </p>
          </div>
        </div>

      </div>
      <div className='mt-6'>
        <div className='services-capablities text-center chessboard'>
          <h2>services and capablities</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
            {serviceinfo.map(item => (
              <Services key={item.id} {...item} />
            ))}
       

          </div>
        </div>
      </div>

    </div>
  )
}
