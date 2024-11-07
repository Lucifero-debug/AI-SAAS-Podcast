import Image from 'next/image'
import React from 'react'

const PodcastCard = () => {
  return (
    <div className='flex flex-col md:h-[10vh]'>
<Image src='https://images.pexels.com/photos/7503462/pexels-photo-7503462.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' width={250} height={250}  className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"/>
<h1 className='text-[#FFFFFF] font-bold text-lg'>Waveform</h1>
<p className='text-gray-500 font-normal'>MKBHD</p>
    </div>
  )
}

export default PodcastCard