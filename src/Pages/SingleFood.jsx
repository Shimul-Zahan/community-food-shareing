import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const SingleFood = () => {

  const food = useLoaderData();
  console.log(food);

  return (
    <div>Fuck You single data id</div>
  )
}

export default SingleFood