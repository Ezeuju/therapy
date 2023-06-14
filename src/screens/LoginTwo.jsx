import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginTwo = () => {
  return (
    <div>
      
<div class="bg-current bg-cover ">
  <NavLink to="/" className="text-white">
  Go Home
  </NavLink>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Thank you for registering with tranquil therapy</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">We will send you more details about your therapy through your email. Feel free to ask any questions through our email.</p>
        <span className="text-[#fff]">
            <a href="mailto:your-email@gmail.com" class= "text-white text-3xl">
              your-email@gmail.com
            </a>
          </span>
       
    </div>
</div>

    </div>
  )
}

export default LoginTwo


