import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const UserCard = () => {
  return (
    <div className='w-full h-[31vh] flex flex-row gap-4'>
        <div className='relative h-full w-[15vw]'>
            <Image alt='' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb' layout='fill' className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"/>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-gray-500'>Verified Creater</p>
            <h1 className='font-medium text-2xl text-[#FFFFFF]'>Marvin James</h1>
            <div className='flex flex-row justify-center gap-2'>
                <Image src='/headphone.svg' alt='' width={24} height={24}/>
                <h2 className='text-[#FFFFFF]'>93,456,987</h2>
                <p className='text-gray-500'>Monthly Listeners</p>
            </div>
            <Button className='bg-orange-500'>
                <Image alt='' src='/randomPlay.svg' width={20} height={20}/>
                <span>Play a Random Podcast</span>
            </Button>
        </div>
    </div>
  )
}

export default UserCard