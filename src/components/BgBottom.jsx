import React from 'react'

export default function BgBottom() {
  return (
    <div id="foot" className='h-[900px] w-full bg-cover -z-10  relative -mt-[900px]' style={{backgroundImage: 'url("./herobg.png")'}}>
        <div className='h-[900px] w-full bg-cover bg-transparent absolute top-0' style={{backgroundImage: 'url("./herobg-2.png")'}}>

        </div>
    </div>
  )
}
