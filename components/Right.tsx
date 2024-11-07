import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousels from './Carousels'
import Podcaster from './Podcaster'

const Right = () => {
  return (
    <div className='w-full h-full flex flex-col text-white p-6 gap-14'>
      <div className="user flex items-center w-full gap-5">
<Image src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb' alt='' className='rounded-full' width={30} height={30}/>
<h1>Marvin James</h1>
<Image src='/right-arrow.svg' alt='' width={30} height={30} className='absolute right-7'/>
      </div>
      <div className='w-full flex flex-col gap-5'>
      <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-medium text-lg'>Fans Also Like</h1>
<Link href='/' className='text-orange-600'>See All</Link>
  </div>
  <div>
    <Carousels/>
  </div>
      </div>
      <div className="top flex flex-col gap-4">
      <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-bold text-lg'>Top Podcaster</h1>
<Link href='/' className='text-orange-600'>See All</Link>
  </div>
    <Podcaster/>
    <Podcaster/>
    <Podcaster/>
  
      </div>
    </div>
  )
}

export default Right