import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-2 mt-40'>
      <hr />
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        {/* ---Left Section--- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full text-gray-600 leading-6'>BooknEvent is a premier platform for discovering and booking the most exciting events around! Whether you're looking to attend a trending comedy show, an inspiring workshop, or a thrilling music concert, BooknEvent has got you covered. Not only can you book tickets, but event organizers can also use our platform to register and manage their events effortlessly. </p>
        </div>
        {/* ---center--- */}
        <div>
            <p className='text-xl font-medium mb-5'>  </p>
        </div>
        {/* ---Right Section--- */}
        <div>
            <p className='text-xl font-medium mb-5 text-secondary'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>booknevent@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ----Copyright text---- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 BooknEvent - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
