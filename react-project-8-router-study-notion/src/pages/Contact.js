import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center w-screen h-5/6">

      <p className='text-white text-3xl '>This is a Contact Page</p>

      <Link className="w-1/6" to="https://www.linkedin.com/in/yuvrajsingh23/">
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Contact me
        </button>
      </Link>
    </div>
  )
}

export default Contact