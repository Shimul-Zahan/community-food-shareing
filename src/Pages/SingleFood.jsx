import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import banner from '../assets/images/bg-image/assorted-different-dishes-black-surface-dining-table-with-burgers-cream-soups-wok-noodles-cole-slaw-salad-grilled-corn-top-view-food-flat-lay.jpg'
import cover from '../assets/images/bg-image/top-view-burguer-vs-fruit.jpg'
import { MyAuthContext } from '../Context/AuthContext'

const SingleFood = () => {

  const food = useLoaderData();
  // console.log(food);
  const { user } = useContext(MyAuthContext);

  const handleSingleFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = e.target.foodName.value;
    const foodImage = form.imageURL.value;
    const foodId = form.id.value;
    const donorEmail = form.donorEmail.value;
    const userEmail = form.userEmail.value;
    const donorName = form.donorName.value;
    const requestDate = form.date.value;
    const pickUpLocation = form.pickUpLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalInfo = form.additionalInfo.value;
    const donation = form.donation.value;
    const status = food?.status;

    const requestFood = { foodName, foodImage, foodId, donorEmail, donorName, userEmail, requestDate, pickUpLocation, expiredDate, additionalInfo, donation, status }
    
    const res = await axios.post('http://localhost:5000/requested-foods', requestFood)
    console.log(res.data);

  }


  return (

    <div className=''>

      <div className='relative'>
        <img src={banner} alt="" className='w-full lg:h-[500px] opacity-100' />
        <h1 className='lg:text-7xl text-center text-green-600 font-fontPrimary font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Your Selected Food Details Here</h1>
      </div>

      <div className='container mx-auto grid grid-cols-5 gap-5 pt-5 mb-20'>
        <div className='col-span-3 shadow-xl'>
          <img src={food?.foodImage} className='w-full lg:h-[600px]' alt="" />
        </div>
        <div className='col-span-2 shadow-xl'>
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-xl font-fontPrimary space-y-4">
              <h1 className='text-2xl font-bold font-fontPrimary pl-4'>Food Information</h1>
              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Food Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.foodName}</dd>
              </div>

              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Quantity</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.quantity}</dd>
              </div>

              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Expire Date</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.expiredDate}</dd>
              </div>

              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Additional Notes</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.additionalNotes}</dd>
              </div>

              <h1 className='text-2xl font-bold font-fontPrimary pl-4'>Donorors Information</h1>

              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Donors Name:</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.donator?.donatorName}</dd>
              </div>

              <div
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900">Pickup Location</dt>
                <dd className="text-gray-700 sm:col-span-2">{food?.pickupLocation}</dd>
              </div>

              <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn bg-green-600 text-2xl font-fontSecondary w-full px-4 hover:bg-green-600'> Request Food</button>
            </dl>
          </div>
        </div>

        {/* Modal Code Here */}

        <dialog id="my_modal_3" className="modal bg-opacity-50">
          <div className="modal-box w-[700px] p-10 bg-green-600">
            <h1 className='text-3xl font-bold font-fontSecondary mb-10'>Food And Some Information</h1>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form onSubmit={handleSingleFood} className='text-xl'>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={ food?.foodName} name="foodName" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" pgreenholder=" " required disabled />
                <label class="peer-focus:font-medium absolute text-2xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={food?.foodImage}  name="imageURL" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required disabled />
                <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Image</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={food?._id}  name="id" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required disabled />
                <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Id</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={food?.donorEmail}  name="donorEmail" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required disabled />
                <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Donor Email</label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" value={user?.email} name="userEmail" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required disabled />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> User Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" value={food?.donatorName} name="donorName"  class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required disabled />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Donor Name</label>
                </div>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={new Date().toDateString()} name="date" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required disabled />
                <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Request Date
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" value={food?.pickupLocation} name="pickUpLocation" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required disabled />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pickup Location</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" value={food?.expiredDate} name="expiredDate" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required disabled />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expired Date</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" defaultValue={food?.additionalNotes} name="additionalInfo" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " regreened />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:border-black">Additional Notes</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="donation" class="block py-2.5 px-0 w-full text-xl font-fontPrimary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                  <label class="peer-focus:font-medium absolute text-xl font-fontPrimary text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donation Money</label>
                </div>
              </div>
              <button type="submit" class="text-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl font-fontPrimary w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request</button>
            </form>
          </div>
        </dialog>

        {/* Modal Done Here */}

      </div>
    </div>
  )
}

export default SingleFood