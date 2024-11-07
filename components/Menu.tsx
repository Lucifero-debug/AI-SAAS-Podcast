import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className=' h-screen w-full text-white p-3 flex flex-col gap-12'>
<div className="logo flex flex-row gap-5">
<Image src='/logo.svg' alt='' width={24} height={24}/>
<h1 className='text-white font-extrabold text-xl'>Podcastr</h1>
</div>
<div className="tabs flex flex-col gap-5">
<Link href='/' className='flex flex-row gap-3 bg-nav-focus'>
<Image src='/home.svg' alt='' width={20} height={20}/>
<h1 className='text-white font-medium text-lg'>Home</h1>
</Link>
<Link href='/' className='flex flex-row gap-3'>
<Image src='/discover.svg' alt='' width={20} height={20}/>
<h1 className='text-white font-medium text-lg'>Discover</h1>
</Link>
<Link href='/' className='flex flex-row gap-3'>
<Image src='/microphone.svg' alt='' width={20} height={20}/>
<h1 className='text-white font-medium text-lg'>Create Podcast</h1>
</Link>
<Link href='/' className='flex flex-row gap-3'>
<Image src='/profile.svg' alt='' width={20} height={20}/>
<h1 className='text-white font-medium text-lg'>My Profile</h1>
</Link>
<UserButton/>
</div>
    </div>
  )
}

export default Menu