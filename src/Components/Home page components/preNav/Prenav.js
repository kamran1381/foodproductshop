import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './prenav.css'
export default function Prenav() {
  return (
    <div className='pre-nav-container text-white flex justify-between'>
     <h3 className='py-3 px-10  hover:text-white mx-12'>The premier destination for premium food products</h3>
            <ul className='mx-14'>
                <li className='hover:text-slate-500'><a><TwitterIcon/></a></li>
                <li className='hover:text-slate-500'><a><SportsBaseballIcon/></a></li>
                <li className='hover:text-slate-500'><a><FacebookIcon/></a></li>
                <li className='hover:text-slate-500'><a><YouTubeIcon/></a></li>

            </ul>
    </div>
  )
}
