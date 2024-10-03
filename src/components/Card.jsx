import React from 'react'

export default function Card() {
  return (
    <div className='bg-white rounded-3xl flex w-[569px] h-[554px] drop-shadow-[0px_4px_50px_#788F9C40]'>
        <p className='text-white w-[97px] h-[40px] rounded-r-[8px] mt-20 flex justify-center items-center bg-[#8a93e5] font-[500] text-[16px]'>New lot</p>
        <div className='w-[362px] h-[454px] flex justify-center items-center flex-col mt-20'>
            <img src="./nut.png" alt="" className='' />
            <p className='text-[20px] font-[400] text-gray-600 mt-20'>CRYSTAL AGATE PHONE GRIP <span className='font-[700] text-[#317189]'>-18.99$</span></p>
        </div>
    </div>
  )
}

// box-shadow: 0px 4px 50px 0px #788F9C40;
