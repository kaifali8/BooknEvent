import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const LocationMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by your location</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply enter your location and find the events based in your city and book the tickets without any hassle</p>
      <div className='flex sm:justify-center gap-4 pt-5'>
        <a className='flex flex-col items-center flex-shrink-0' href={'/events'}>
          <img className='w-1/4 hover:translate-y-[-10px] transition-all duration-500' src={assets.location_pin} alt="" />
          <p className='text-center text-m'>Location</p>
        </a>
      </div>
    </div>
  )
}

export default LocationMenu
