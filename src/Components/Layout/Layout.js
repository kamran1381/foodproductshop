import React from 'react'
import Neighbor from '../Home page components/neighbor/Neighbor'
export default function Layout({children}) {
  return (
    <>
        <Neighbor/>
        {children}
    </>
  )
}
