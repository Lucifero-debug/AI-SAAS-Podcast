import UserCard from '@/components/UserCard'
import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import PodcastCard from '@/components/PodcastCard';

const page = () => {
  return (
    <div className='text-white p-6 flex flex-col gap-5'>
        <h1 className='font-medium text-lg'>Podcaster Profile</h1>
        <UserCard/>
        <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-medium text-2xl'>Discover Community Podcasts</h1>
<div className='flex flex-row items-center bg-[#15171C] w-28'>
<FilterListIcon style={{color:"white"}} fontSize='large'/>
<h1 className='text-white text-lg'>Filter</h1>
</div>
  </div>
  <div className='grid grid-cols-4 gap-y-32 gap-x-4 w-full h-[100vh]'>
    <PodcastCard/>
    <PodcastCard/>
    <PodcastCard/>
    <PodcastCard/>
    <PodcastCard/>
    <PodcastCard/>
    <PodcastCard/>
  <PodcastCard/>
  <PodcastCard/>
  <PodcastCard/>
  <PodcastCard/>
  </div>
    </div>
  )
}

export default page