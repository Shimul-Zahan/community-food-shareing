import React from 'react'
import Banner from '../Components/Banner'
import FeaturedFood from '../Components/FeaturedFood'
import ReactTable from '../Components/ReactTable'
import OurCoreValues from '../Components/OurCoreValues'
import OurPrograms from '../Components/OurPrograms'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Feeding Neighbour | Home</title>
      </Helmet>
      <Banner />
      <FeaturedFood />
      <OurPrograms />
      <OurCoreValues />
    </div>
  )
}

export default Home