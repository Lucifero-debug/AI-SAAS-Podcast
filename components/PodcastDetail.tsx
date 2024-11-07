import Image from 'next/image'
import React from 'react'

const PodcastDetail = () => {
  return (
    <div className='flex flex-row w-full relative gap-7 h-[35vh]'>
        <div className="first h-full w-[15vw] relative">
            <Image alt='' src='https://images.pexels.com/photos/7503462/pexels-photo-7503462.jpeg?auto=compress&cs=tinysrgb&w=600' layout='fill'  className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]" objectFit='cover'/>
        </div>
        <div className="second flex flex-col mt-3 gap-4">
<h1 className='font-medium text-4xl'>Javascript Jungle</h1>
<div className='flex flex-row gap-2'>
    <Image src='https://images.pexels.com/photos/7503462/pexels-photo-7503462.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' width={45} height={45} className='rounded-full'/>
    <p>Christopher Sorris</p>
</div>
        </div>
        <div className="third absolute right-4">
            <Image alt='' src='/three-dots.svg' width={30} height={30}/>
        </div>
    </div>
  )
}

export default PodcastDetail