import PodcastCard from '@/components/PodcastCard'
import PodcastDetail from '@/components/PodcastDetail'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='text-white p-7 flex flex-col gap-5'>
         <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-medium text-xl'>Currently Playing</h1>
<div className='flex flex-row gap-3'>
    <Image alt='' src='/headphone.svg' width={25} height={25}/>
    <h2 className='font-medium text-lg'>110,678</h2>
</div>
  </div>
  <PodcastDetail/>
  <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia facilis quia, architecto, quae voluptas eius exercitationem nisi cumque excepturi vero. Mollitia itaque neque voluptates recusandae nemo iure, sint minima eligendi voluptatibus nisi sequi libero molestiae inventore laborum cumque atque consectetur aliquid. Facere vel tempore ad blanditiis!</p>
  <div className="tran flex flex-col gap-4">
    <h1 className='text-[#FFFFFF]'>Transcription</h1>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur expedita facere, velit deleniti impedit ipsam quisquam sint quasi necessitatibus cumque sed est fuga dolore aspernatur exercitationem illo.</p>
  </div>
  <div className="tran flex flex-col gap-4">
    <h1 className='text-[#FFFFFF]'>Image Prompt</h1>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur expedita facere, velit deleniti impedit ipsam quisquam sint quasi necessitatibus cumque sed est fuga dolore aspernatur exercitationem illo.</p>
  </div>
  <div className="similar flex flex-col gap-4">
    <h1 className='text-[#FFFFFF] font-medium text-xl'>Similar Podcasts</h1>
    <div className="cards flex flex-row gap-4">
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>
    </div>
  </div>
    </div>
  )
}

export default page