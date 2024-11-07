import Image from 'next/image'
import React from 'react'

const Latest = () => {
  return (
    <div className='text-white flex justify-between'>
        {/* left */}
<div className='flex gap-6 items-center'>
    <span className='font-extrabold text-lg'>1</span>
    <div className='flex gap-2 items-center'>
        <Image alt='' src='https://images.pexels.com/photos/7503462/pexels-photo-7503462.jpeg?auto=compress&cs=tinysrgb&w=600' width={33} height={33} className="aspect-square h-fit w-[70%]"/>
        <h2 className='whitespace-nowrap'>The Futui</h2>
    </div>
</div>


{/* right */}
<div className='h-[10vh] w-[60%]  flex justify-between'>
<div className='flex items-center gap-3'>
<Image src='/headphone.svg' alt='' width={30} height={30}/>
<span>193,456</span>
</div>
<div className='flex items-center gap-3'>
<Image src='/watch.svg' alt='' width={30} height={30}/>
<span>193,456</span>
</div>
<div className='flex items-center gap-3'>
<Image src='/three-dots.svg' alt='' width={30} height={30} className='rotate-90'/>
</div>
</div>
    </div>
  )
}

export default Latest