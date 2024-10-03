import React from 'react'

export default function BgTop() {
  return (
    <div className='h-[900px] w-full bg-cover -z-10 absolute' style={{backgroundImage: 'url("./herobg.png")'}}>
        <div className='h-[603.5px] w-full bg-cover bg-transparent absolute bottom-0' style={{backgroundImage: 'url("./saap.png")'}}>

        </div>
    </div>
  )
}
