import React from 'react'

export default function Card2({selected}) {
  return (
    <div className='flex flex-col justify-center items-center w-[322px] h-[412px] border-2 shadow-lg rounded-[30px] my-8'>
        <img src="./nut.png" alt="" />
        <p className='font-sans font-[400] text-[20px] text-gray-600'>CRYSTAL AGATE PHONE GRIP</p>
        <p className='font-[700] text-[20px] mb-4 text-[#317189]'>-18.99$</p>
        <button className={selected ? `text-white bg-[#75cceb] py-1 px-3 rounded-[18px] w-[180px] h-[56px] font-semibold shadow-xl` 
            : `bg-white text-[#75cceb] py-1 px-3 rounded-[18px] w-[180px] h-[56px] font-semibold border-[3px] border-[#75cceb]`}>BUY NOW</button>
    </div>
  )
}
