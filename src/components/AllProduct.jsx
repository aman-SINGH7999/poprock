import React from 'react'
import Card2 from './Card2'
import { IoMdArrowDropdown } from "react-icons/io";

export default function AllProduct() {
  return (
    <div className='px-10'>
        <h1 className='text-center text-[46px] font-sans font-[700] my-8 text-[#31546d]'>All product</h1>
        <div>
            <div className='flex space-x-4 text-[16px]'>
                <div className='flex items-center text-[#9ab0c0] font-[700]'>Filter: <span className='text-[#31546d] mx-2'>All Products </span><IoMdArrowDropdown className='text-[#31546d] mt-1'/></div>
                <div className='flex items-center text-[#9ab0c0] font-[700]'>Sort: <span className='text-[#31546d] mx-2'>Best Selling </span><IoMdArrowDropdown className='text-[#31546d] mt-1'/></div>
            </div>
            <div className='flex flex-wrap justify-around'>
                <Card2 selected={true}></Card2>
                <Card2></Card2>
                <Card2></Card2>
                <Card2></Card2>
                <Card2></Card2>
                <Card2></Card2>
                <Card2></Card2>
                <Card2></Card2>
            </div>
        </div>
        <div className=' text-center'>
            <button className=' w-[134px] h-[48px] my-8 rounded-[18px] border-2 font-[700] text-[16px] border-[#75cceb] text-[#75cceb]'>View All</button>
        </div>
    </div>
  )
}
