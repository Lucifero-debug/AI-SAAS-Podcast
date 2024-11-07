import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
   CarouselDots
  } from "@/components/ui/carousel"
import Image from 'next/image'
  

const Carousels = () => {
  return (
    <div className='w-full h-full'>
        <Carousel className='w-full h-full'>
  <CarouselContent>
    <CarouselItem className='rounded-md h-[49vh] '>
      <div className='h-[40vh] relative'>
       <Image alt='' src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600' layout='fill' />
      </div>
      <div className='background: rgb(221,161,29);
background: linear-gradient(90deg, rgba(221,161,29,1) 0%, rgba(43,26,0,1) 24%);'>
        <h1 className='font-bold'>Wavefrom</h1>
        <p className='text-gray-500 font-normal'>Marquies Brownlee</p>
      </div>
    </CarouselItem>
    <CarouselItem className='rounded-md h-[49vh]'>
      <div className='h-[40vh] relative'>
       <Image alt='' src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600' layout='fill' />
      </div>
      <div className='background: rgb(221,161,29);
background: linear-gradient(90deg, rgba(221,161,29,1) 0%, rgba(43,26,0,1) 24%);'>
        <h1 className='font-bold'>Wavefrom</h1>
        <p className='text-gray-500 font-normal'>Marquies Brownlee</p>
      </div>
    </CarouselItem>
    <CarouselItem className='rounded-md h-[49vh]'>
      <div className='h-[40vh] relative'>
       <Image alt='' src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600' layout='fill' />
      </div>
      <div className='background: rgb(221,161,29);
background: linear-gradient(90deg, rgba(221,161,29,1) 0%, rgba(43,26,0,1) 24%);'>
        <h1 className='font-bold'>Wavefrom</h1>
        <p className='text-gray-500 font-normal'>Marquies Brownlee</p>
      </div>
    </CarouselItem>
    <CarouselItem className='rounded-md h-[49vh]'>
      <div className='h-[40vh] relative'>
       <Image alt='' src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600' layout='fill' />
      </div>
      <div className='background: rgb(221,161,29);
background: linear-gradient(90deg, rgba(221,161,29,1) 0%, rgba(43,26,0,1) 24%);'>
        <h1 className='font-bold'>Wavefrom</h1>
        <p className='text-gray-500 font-normal'>Marquies Brownlee</p>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselDots/>
</Carousel>
    </div>
  )
}

export default Carousels