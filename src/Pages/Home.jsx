import React from 'react'
import Banner from '../Components/Banner'
import FeaturedFood from '../Components/FeaturedFood'
import ReactTable from '../Components/ReactTable'
import OurCoreValues from '../Components/OurCoreValues'
import OurPrograms from '../Components/OurPrograms'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedFood />
      <OurPrograms />
      <OurCoreValues />
    </div>
  )
}

export default Home