import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-blue-400 p-4 text-white w-screen'>
        <div className='w-1/2'>
            <img className='w-[199px] h-[64px]' src="./my-logo.png" alt="logo" />
        </div>
        <div className='flex w-1/2 justify-between items-center px-16'>
            <div className='flex space-x-8 font-[500] text-[16px]'>
                <Link to="/">Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to='/help'>Help</Link>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#ff2b77] rounded-full w-[14px] h-[14px] text-[8px] font-[700] flex justify-center items-center m-1'>00</div>
                <img src="./cart-logo.png" alt="cart-logo" className='w-[23.52px] h-[21.65px]' />
            </div>
        </div>
    </div>
  )
}
