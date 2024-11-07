import Latest from '@/components/Latest'
import PodcastCard from '@/components/PodcastCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-full w-full p-4 gap-10 '>
<div className="trending flex flex-col gap-4 md:h-[46vh]">
  <h1 className='text-white font-medium text-xl'>Trending Podcasts</h1>
  <div className='flex md:flex-row flex-col gap-3'>
  <PodcastCard/>
  <PodcastCard/>
  <PodcastCard/>
  <PodcastCard/>
  </div>
</div>
<div className="latest flex flex-col gap-4 md:h-[47vh]">
  <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-medium text-xl'>Latest Podcasts</h1>
<Link href='/' className='text-orange-600'>See All</Link>
  </div>
<div className='w-full md:h-[47vh]'>
  <Latest/>
  <Latest/>
  <Latest/>
  <Latest/>
</div>
</div>
<div className="popular flex flex-col gap-4 md:h-[46vh]">
  <h1 className='text-white font-medium text-xl'>Trending Podcasts</h1>
  <div className='flex md:flex-row flex-col gap-3'>
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