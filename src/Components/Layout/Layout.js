import React from 'react'
import Neighbor from '../Home page components/neighbor/Neighbor'
import Footer from '../Home page components/Footer/Footer'
export default function Layout({children}) {
  return (
    <>
        <Neighbor/>
        {children}
        <Footer/>
    </>
  )
}
