import {  SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-full glassmorphism-auth'>
      <SignUp appearance={{
         variables: {
          colorPrimary: "#ffffff", // primary color for buttons and links
          colorBackground: "#15171C", // background color
          borderRadius: "0.5rem", // border radius for components
          fontFamily: "Inter, sans-serif", // font family
        },
        elements: {
          // Customize the header container
          header: " text-white ",
          // Customize the header title (if you have a title)
          headerTitle: "text-2xl font-bold text-white",

          // Customize header subtitle
          headerSubtitle: "text-gray-200",

          // Customize the logo in the header
          headerLogo: "rounded-full border-2 border-white custom-logo",
          formFieldLabel: "text-sm text-white font-semibold mb-1",
          formButtonPrimary: "bg-orange-600 text-white rounded-md py-2 px-4 custom-button",
        },
      }} path='/sign-up' routing='path'
/>
    </div>
  )
}

export default page