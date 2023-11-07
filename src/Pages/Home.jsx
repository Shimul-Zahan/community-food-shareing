import React from 'react'
import Banner from '../Components/Banner'
import FeaturedFood from '../Components/FeaturedFood'
import ReactTable from '../Components/ReactTable'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedFood />
      <ReactTable />
    </div>
  )
}

export default Home