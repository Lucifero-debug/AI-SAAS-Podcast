import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'

const Searchbar = () => {
  return (
    <div className='relative'>
        <Input  className="input-class py-6 pl-14 focus-visible:ring-offset-orange-1"/>
        <Image src='/search.svg' alt='' width={24} height={20} className='absolute top-1.5 left-4'/>
    </div>
  )
}

export default Searchbar