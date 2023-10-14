import React from 'react'
import styles from './Neighbor.module.css'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import DropdownMenu from '../buttons/Dropdownmenu/Dropdownmenu';
export default function Neighbor() {
  return (
    <div className={`${styles.hieghttest} `}>
      <div className={`${styles.neighbor} `}>
        <div className='flex justify-around'>
          <ul className={`${styles.inline} `}>

            <li className='hover:text-slate-700 text-center '><span>welcome</span> &#xFF5C;
              <ZoomInIcon /> personal shopper</li>
          </ul>
          <ul className={`${styles.inline}   `}>
            <li className='hover:text-slate-700 text-center logo'><img src='images\header img\neighborhood_logo.png' /></li>
          </ul>
          <ul className={`${styles.inline} `}>
            <li>  <a href='#'><DropdownMenu /> </a> &#xFF5C;
              <Link to='/login' >   login </Link>
            </li>
          </ul>
        </div>

      </div>
      <hr />
      <Navbar className={`${styles.navheight}`} />
    </div>
  )
}
