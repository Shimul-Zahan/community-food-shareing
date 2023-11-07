import React from 'react'
import bg from '../assets/images/our-mission/bg.png'
import img1 from '../assets/images/our-mission/Find-Food-Book-Icon.png'
import img2 from '../assets/images/our-mission/Find-Food-Leaf-Icon.png'
import img3 from '../assets/images/our-mission/Find-Food-People-Icon.png'
import img4 from '../assets/images/our-mission/Find-Food-Sustainability-Icon.png'

const OurCoreValues = () => {
    return (
        <div className='py-10 px-4 min-h-screen bg-blend-overlay bg-opacity-90' style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={img3} alt="" />
                    <h1 className='text-4xl font-bold font-fontPrimary my-5'>Feed</h1>
                    <p className='text-xl font-fontSecondary'>We empower families and individuals in need, ensuring fair access for all to nourishing food through our programs and partners, helping our neighbors achieve their health and nutrition goals.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={img4} alt="" />
                    <h1 className='text-4xl font-bold font-fontPrimary my-5'>Sustainability</h1>
                    <p className='text-xl font-fontSecondary'>We are committed to promoting sustainable operations and upholding the highest standards of food safety and quality. This ensures that Community Food Share remains a trusted and reliable source of food, bringing peace of mind and nourishment to our community.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center lg:text-black md:text-white'>
                    <img src={img1} alt="" />
                    <h1 className='text-4xl font-bold font-fontPrimary my-5'>Education</h1>
                    <p className='text-xl font-fontSecondary text-white lg:text-black'>Together, we raise awareness about food insecurity, integrating community input, and making decisions rooted in data and evaluation.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center text-white lg:text-black'>
                    <img src={img2} alt="" />
                    <h1 className='text-4xl font-bold font-fontPrimary my-5'>Community</h1>
                    <p className='text-xl font-fontSecondary'>We join hands with partner agencies and community members, working together to enhance our ability to receive, store, and distribute food. Through collaboration, we stand strong in our fight against hunger.</p>
                </div>
            </div>

        </div>
    )
}

export default OurCoreValues