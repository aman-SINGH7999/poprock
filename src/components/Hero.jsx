import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-blue-300 w-screen'>
    <div className="bg-blue-300 flex w-full ">
        <div className='w-3/5 px-16 mt-32 flex flex-col items-start'>
            <h1 className='text-white font-[400] text-[40px]'>Welcome to</h1>
            <h2 className='text-white font-[700] text-[64px]'>Pop Rock Crystal Shop!</h2>
            <h3 className='w-1/2 text-[16px] my-8 text-[#31546d] font-[400]'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
            </h3>
            <div className='flex my-4 justify-center items-center text-[#317189] text-[16px]'>
                <button className='w-[180px] h-[56px] bg-white rounded-xl font-[700]'>SHOP NOW</button>
                <Link to='/about' className='mx-8 font-[400]' > about us</Link>
            </div>
        </div>
        <div className='w-1/2 px-6 pt-14'>
            <Card />
            <div className='flex justify-center items-center mt-8'>
                <IoArrowBackSharp className='bg-[#8a93e5] w-[24px] h-[24px] mx-4 rounded-sm' />
                <FaCircle className='w-[14px] h-[14px] text-[#8a93e5] mx-2 active:bg-violet-600' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <FaCircle className='w-[14px] h-[14px] text-[#d7dbff]  mx-2' />
                <IoArrowForward className='bg-[#8a93e5] w-[24px] h-[24px] mx-4 rounded-sm' />
            </div>
        </div>
    </div>
    <div>
        <img src="./scroll.png" alt="" className='cursor-pointer w-[121px] h-[38px]' />
    </div>
    </div>
  )
}
