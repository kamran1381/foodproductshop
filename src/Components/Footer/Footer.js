import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const RepeatingList = () => {
  const listNames = ['Our story', 'Stores', 'Press', 'Events', 'Contact']
  return (
    <>
      {listNames.map(item => (
        <ul className='flex justify-between border-t-1 border-[#333333]'>
          <li>{item}</li>
          <li>&#10095;</li>
        </ul>
      ))}
    </>


  )
}

const RepeatingTest = () => {
  const listNames = ['F.A.Qs', 'Deliveray and Returns', 'Ordering Tracking', 'payment', 'Privacy']
  return (
    <>
      {listNames.map(item => (
        <ul className='flex justify-between border-t-1 border-[#333333]'>
          <li>{item}</li>
          <li>&#10095;</li>
        </ul>
      ))}
    </>


  )
}
export default function Footer() {
  let componentArray = []
  let listRepeat = []
  for (let i = 0; i <= 0; i++) {
    componentArray.push(<RepeatingList key={i} />)
    listRepeat.push(<RepeatingTest key={i} />)
  }
  return (
    <div className='bg-[#252525] text-white'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
        <div className="p-4 text-left">
          <div class="section">
            <div class="line border-slate-700" ></div>
            <h5 className=' text-lg'>The Neighborhood</h5>
            <div class="line  border-slate-700"></div>
          </div>
          <div className='py-2'>
            <h3 className='text-lg font-semibold mb-2'>welcome to the neighborhood</h3>
            <p className='text-sm/[15px]'>
              Neighborhood is a clean, responsive & retina-ready eCommerce WordPress theme. It has everything you need to start selling today!
            </p>
          </div>
        </div>
        <div className="p-4">
          <div class="section">
            <div class="line border-slate-700" ></div>
            <h5 className='text-base'>About Neighborhood</h5>
            <div class="line  border-slate-700"></div>
          </div>
          <div className='py-3 px-2'>
            {componentArray}
          </div>
        </div>
        <div className="p-4">
          <div class="section">
            <div class="line border-slate-700" ></div>
            <h5 className='text-base'>Online Shopping</h5>
            <div class="line  border-slate-700"></div>
          </div>
          <div className='py-3 px-2'>
            {listRepeat}
          </div>
        </div>
        <div className="p-4">
          <div class="section">
            <div class="line border-slate-700" ></div>
            <h5 className='text-base'>Online Shopping</h5>
            <div class="line  border-slate-700"></div>
          </div>
          <div className='px-2'>
            <div class="flex border-b-1 border-[#333333] py-2">
              <div class="flex-1 ..."><TwitterIcon /></div>
              <div class="contents">
                <div class="flex-1 ..."><SportsBaseballIcon /></div>
                <div class="flex-1 ..."><FacebookIcon /></div>
              </div>
              <div class="flex-1 ..."><YouTubeIcon /></div>
            </div>
          </div>
          <div className='py-2'>
            <span>Sign up for our newsletter:</span>
            <form class="w-full max-w-sm relative ">
              <div class="flex items-center border-b border-teal-500 py-2 ">
                <input class="appearance-none  border-none w-full text-gray-700 py-1 px-2 pl-10 leading-tight focus:outline-none bg-slate-50" type="email" placeholder="Enter your Email Here" aria-label="Email" />
                <i class="fas fa-envelope text-gray-500 absolute right-3 top-3"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
