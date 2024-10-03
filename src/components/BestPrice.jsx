import React from 'react'

export default function BestPrice() {
  return (
    <div className='flex my-8'>
        <div className='w-1/2 py-14 pl-[50px] flex flex-col justify-center items-end font-sans'>
            <h1 className=' font-[400] text-[40px] text-[#31546d]'>BEST PRICE</h1>
            <h2 className=' font-[700] text-[64px] text-[#31546d]'>Agate Phone Grip</h2>
            <div className='flex justify-center items-center'>
                <s className='text-[#31546d] font-[400] mx-2'>44.50$</s>
                <h3 className='font-[700] text-[70px] text-[#e35b3e]'>19.50$</h3>
            </div>
            
            <p className='text-pretty text-end w-2/3'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>
            <button className="text-white bg-[#75cceb] py-1 px-3 rounded-[18px] w-[180px] h-[56px] font-semibold shadow-xl mt-8">BUY NOW</button>
        </div>
        <div className='w-1/2 overflow-hidden relative'>
            <div className='w-[744px] h-[744px] flex justify-center items-center'>
                <div className='w-[744px] h-[372px] absolute bg-[#fff3] -z-[5] shadow-[20px_20px_30px_rgba(0,0,0,0.03)] rounded-b-full translate-y-[50%]' ></div>
                <div className='w-[570px] h-[570px] bg-white rounded-full shadow-[0px_0px_30px_rgba(0,0,0,0.1)] flex justify-center items-center'>
                    <div className='w-[364px] h-[364px] bg-white rounded-full shadow-[0px_0px_30px_rgba(0,0,0,0.1)] flex justify-center items-center'>
                        <img src="./nut.png" alt="nut" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
