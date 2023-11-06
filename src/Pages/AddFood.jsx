import React, { useContext } from 'react'
import animation from '../assets/images/add-food.json'
import Lottie from 'lottie-react'
import bg from '../assets/images/donation-image.jpg'
import { MyAuthContext } from '../Context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddFood = () => {

    const { user } = useContext(MyAuthContext);
    const navigate = useNavigate();

    const handleAddFood = async (e) => {
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

        const food = { foodImage, foodName, quantity: parseInt(quantity), pickupLocation, expiredDate, additionalNotes, status, donatorImage, donatorName, donorEmail }
        const res = await axios.post('http://localhost:5000/add-food', food)
        console.log(res.data);
        if (res.data.acknowledged) {
            e.target.reset();
            navigate('/');
        }
    }

    return (

        <div className='py-10 px-4 bg-black bg-blend-overlay bg-opacity-90' style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='flex justify-center items-center'>
                <Lottie animationData={animation} className='w-[300px]'></Lottie>
            </div>
            <div className='w-full lg:w-[800px] mx-auto mt-10'>
                <form onSubmit={handleAddFood} className='text-lg'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="foodName" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" pgreenholder=" " required />
                        <label class="peer-focus:font-medium absolute text-2xl font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="imageURL" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bordgreenlue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Image</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="foodQuantity" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Food Quantity
</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="pickUpLocation" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pickup Location</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="expiredDate" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expired Date</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="additionalInfo" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " regreened />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:border-green-500">Additional Notes</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" value="available" name="status" class="block py-2.5 px-0 w-full text-lg font-fontPrimary text-green-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required disabled />
                            <label class="peer-focus:font-medium absolute text-lg font-fontPrimary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                        </div>
                    </div>
                    <button type="submit" class="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg font-fontPrimary lg:w-[800px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AddFood