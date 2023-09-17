import React from 'react'
import './Newssettler.css'
export default function Newssettler() {
  return (
    <div className='flex  justify-between  newssettler-outlet'>
      <div className='text-center'><p>sign up to our food store letter</p></div>
      <div >

        <p >...and receive $20 coupon for first shopping.</p>
        
        </div>
      <div >
        <form class="form-inline" action="">
          <input type="email" id="email" placeholder="Enter email" name="email" />
   
          <button type="submit">Submit</button>
        </form>

      </div>

    </div>
  )
}
