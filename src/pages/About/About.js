import React from 'react';
import './about.css';
import Services from '../../Components/About page components/services/services';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Teambox from '../../Components/About page components/Teambox/Teambox';

export default function About() {
  const serviceinfo = [
    { id: 1, title: 'Branding & Identity', percentage: 85, icon: <VisibilityIcon style={{ fontSize: '40px' }} /> },
    { id: 2, title: 'Marketing', percentage: 60, icon: <LocalShippingIcon style={{ fontSize: '40px' }} /> },
    { id: 3, title: 'User Interface Design', percentage: 75, icon: <PaymentsIcon style={{ fontSize: '40px' }} /> },
    { id: 4, title: 'Project Management', percentage: 80, icon: <InsertEmoticonIcon style={{ fontSize: '40px' }} /> },
    { id: 5, title: 'Logistics', percentage: 50, icon: <AccountTreeIcon style={{ fontSize: '40px' }} /> },
    { id: 6, title: 'Photography', percentage: 95, icon: <CameraAltIcon style={{ fontSize: '40px' }} />
    }
  ];

  const teamMembers = [
    { id: 1, Name: 'Susan B. Anthony', position: 'Logistics', src: 'http://neighborhood.swiftideas.com/wp-content/uploads/2013/03/ff_team4_retina_bw-270x270.jpg' },
    { id: 2, Name: 'Jane FakeName', position: 'Marketing Director', src: 'http://neighborhood.swiftideas.com/wp-content/uploads/2013/03/ff_team1_retina_bw-270x270.jpg' },
    { id: 3, Name: 'Stephen Noone', position: 'Support Guru', src: 'http://neighborhood.swiftideas.com/wp-content/uploads/2013/03/team2_retina_bw-270x270.jpg' },
    { id: 4, Name: 'Martin James', position: 'Managing Director', src: 'http://neighborhood.swiftideas.com/wp-content/uploads/2012/11/ff_team3_retina_bw-270x270.jpg' }
  ];

  return (
    <div>
     <div className="shadow-lg">
      <div className='bg-[#FBFBFB]'>
        <h2 className='py-6 px-3 text-3xl text-gray-900 font-semibold'>About Us</h2>
      </div>
      <div className='our-mission-container mt-4 bg-white p-4'>
        <h1 className='text-black text-center text-xl font-semibold'>Our Mission</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed ligula. Vivamus purus odio, mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.
              Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed.
            </p>
          </div>
          <div className="p-4">
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed ligula. Vivamus purus odio, mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac mauris molestie hendrerit.
              Quisque nec nisi tortor. Etiam at mauris sit amet magna suscipit hend merit non sed.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <div className='services-capablities bg-[#F4F4F4]'>
          <h2 className='text-center py-3 text-2xl font-semibold'>Services and Capabilities</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {serviceinfo.map(item => (
              <Services key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <div className='services-capabilities'>
          <div className='text-center py-3'>
            <div className='text-with-line'>
              <h2 className='text-2xl font-semibold'>Meet Our Team</h2>
            </div>
          </div>
          <div className='container mt-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {teamMembers.map((item) => (
                <Teambox key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
