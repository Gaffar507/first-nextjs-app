import React from 'react'
import Image from 'next/image'
import lambo from '@/public/images/lambo.png'

const page = () => {
  return (
    <div>
      <h1>New Projects</h1>
      <div className='w-[300px]'>
        <Image quality={100} placeholder='blur' src={lambo} alt="Lambo"  />
      </div>
    </div>
  )
}

export default page
