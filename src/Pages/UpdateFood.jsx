import React, { useContext, useEffect, useState } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import bg from '../assets/images/bg-image/1132.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import useFeaturesFoods from '../Hooks/useFeaturesFoods';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateFood = () => {

    const { user } = useContext(MyAuthContext);
    const { data } = useFeaturesFoods();
    const { id } = useParams();
    const [food, setFood] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const singleFood = data?.find(food=> food?._id === id);
        setFood(singleFood);
    }, [user])


    const handleUpdate = async (e) => {
        e.preventDefault();
        const foodImage = e.target.imageURL.value;
        const foodName = e.target.foodName.value
        const quantity = e.target.foodQuantity.value
        const pickupLocation = e.target.pickUpLocation.value
        const expiredDate = e.target.expiredDate.value
        const additionalNotes = e.target.additionalInfo.value
        const status = e.target.status.value
        const donatorName = user?.displayName;
        const donatorImage = user?.photoURL;
        const donorEmail = user?.email;

        const updatedFood = { foodImage, foodName, quantity: parseInt(quantity), pickupLocation, expiredDate, additionalNotes, status, donatorImage, donatorName, donorEmail }
        const res = await axios.put(`http://localhost:5000/update-food/${id}`, updatedFood)
        console.log(res.data);
        if (res.data.acknowledged) {
            e.target.reset();
            Swal.fire({
                title: "Good job!",
                text: "Your food information are updated!",
                icon: "success"
            });
            navigate('/');
        }

    }

    return (
        <div className='min-h-screen bg-opacity-90 bg-blend-overlay bg-black' style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Feeding Neighbour | Update food</title>
            </Helmet>
            <h1 className='text-center lg:text-5xl font-fontSecondary font-bold my-10 text-white'>Hello Mr. {user?.displayName} update your food.</h1>

            <div className='w-full lg:w-[800px] mx-auto mt-10 p-2'>
                <form onSubmit={handleUpdate} className='text-lg'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" defaultValue={food?.foodName} name="foodName" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" pgreenholder=" " required />
                        <label class="peer-focus:font-medium absolute text-2xl font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" defaultValue={food?.foodImage} name="imageURL" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Image</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" defaultValue={food?.quantity} name="foodQuantity" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Food Quantity
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={food?.pickupLocation} name="pickUpLocation" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pickup Location</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={food?.expiredDate}  name="expiredDate" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expired Date</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={food?.additionalNotes} name="additionalInfo" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " regreened />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:border-green-500">Additional Notes</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={food?.status} value="available" name="status" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                        </div>
                    </div>
                    <button type="submit" class="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg font-fontPrimary lg:w-[800px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default UpdateFood