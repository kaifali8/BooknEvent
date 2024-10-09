import React from 'react'
import Header from '../components/Header'
import LocationMenu from '../components/LocationMenu'
import TrendingEvents from '../components/TrendingEvents'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <LocationMenu/>
      <TrendingEvents/>
      <Banner/>
    </div>
  )
}

export default Home
