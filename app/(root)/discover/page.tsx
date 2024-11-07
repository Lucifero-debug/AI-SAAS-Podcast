import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import Searchbar from '@/components/Searchbar';
import PodcastCard from '@/components/PodcastCard';

const page = () => {
  return (
    <div className='p-4 flex flex-col gap-8 md:overflow-hidden'>
        <Searchbar/>
        <div className='w-full flex items-center justify-between'>
<h1 className='text-white font-medium text-2xl'>Discover Community Podcasts</h1>
<div className='flex flex-row items-center bg-[#15171C] w-28'>
<FilterListIcon style={{color:"white"}} fontSize='large'/>
<h1 className='text-white text-lg'>Filter</h1>
</div>
  </div>
  <div className="grid grid-cols-4 w-full h-[100vh] gap-y-36 gap-x-4 overflow-y-auto">
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