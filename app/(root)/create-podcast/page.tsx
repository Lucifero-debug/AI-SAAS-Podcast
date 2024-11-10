'use client'
import React, { useState } from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { podcastSchema, PodcastSchema } from '@/lib/podcastValidation';
import Image from 'next/image';


const CreatePodcast = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isThumbPrompt,setIsThumbPrompt]=useState<boolean>(true)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PodcastSchema>({
    resolver: zodResolver(podcastSchema)
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };


  const onSubmit: SubmitHandler<PodcastSchema> = (data) => console.log(data)
  return (
    <div className='p-6 flex flex-col gap-4'>
       <div className='w-full flex items-center justify-between'>
       <h1 className='text-white font-medium text-2xl'>Create Your Podcast</h1>
       </div>
<div className="form text-white">
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
  <div className="title flex flex-col gap-2 h-full">
  <label htmlFor="" className='font-bold'>Name</label>
      <input defaultValue="test" {...register("name", { required: true })} className='h-[7vh] rounded-lg bg-[#15171C] p-3 outline-none'/>
  </div>
  <div className="cat flex flex-col gap-2 h-full">
  <label htmlFor="" className='font-bold'>Category</label>
  <select id=""  {...register("category")} className='h-[7vh] rounded-lg bg-[#15171C] p-3 outline-none'>
<option value="">Fight</option>
<option value="">Love</option>
<option value="">Mystery</option>
<option value="">Comedy</option>
  </select>
      {errors.desc && <span>This field is required</span>}
  </div>
<div className="desc flex flex-col gap-2 h-full">
  <label htmlFor="" className='font-bold'>Description</label>
      <textarea {...register("desc", { required: true })} className='h-[11vh] rounded-lg bg-[#15171C] p-3 outline-none'/>
      {errors.desc && <span>This field is required</span>}
</div>
<div className="desc flex flex-col gap-2 h-full">
  <label htmlFor="" className='font-bold'>Ai Prompt To Generate a Podcast</label>
      <textarea {...register("podcastPrompt", { required: true })} className='h-[20vh] rounded-lg bg-[#15171C] p-3 outline-none'/>
      {errors.podcastPrompt && <span>This field is required</span>}
</div>
<div className="desc flex flex-col gap-2 h-full">
  <div className="label flex items-center gap-5">
  <label htmlFor="" className='font-bold cursor-pointer bg-[#15171C] py-2 px-4 rounded' onClick={()=>setIsThumbPrompt(true)}>Ai Prompt To Generate a Thumbnail</label>
  <input type="file"   id="file" className='hidden' onChange={handleImageChange}/>
  <label htmlFor="file" className="bg-[#15171C] text-white py-2 px-4 rounded cursor-pointer" onClick={()=>setIsThumbPrompt(false)}>
            Upload Custom Image
  </label>
  </div>
  <div className='w-full h-full'>
    {
      isThumbPrompt?(
        <div className="text w-full">
        <textarea {...register("thumbnailPrompt", { required: true })} className='h-[28vh] w-full rounded-lg bg-[#15171C] p-3 outline-none'/>
        {errors.podcastPrompt && <span>This field is required</span>}
        </div>
      ):(
        <div className="img h-[30vh] rounded-lg bg-[#15171C] relative">
        {selectedImage ? (
                   <Image src={selectedImage} alt="Selected Image" layout='fill' objectFit='cover' />
                 ) : (
                   <div className='flex flex-col justify-center items-center h-full'>
                     <Image src='/upload-image.svg' alt='' height={60} width={60}/>
                     <p className='text-gray-500'><span className='text-orange-600 font-bold'>Click to Upload</span>&nbsp;Or Drag and Drop</p>
                   </div>
                 )}
        </div>
      )
    }
   
    
  </div>
</div>
      <input type="submit" className='bg-orange-600 h-10 rounded-lg font-bold text-md' value='Submit to Publish Podcast'/>
    </form>
</div>
    </div>
  )
}

export default CreatePodcast