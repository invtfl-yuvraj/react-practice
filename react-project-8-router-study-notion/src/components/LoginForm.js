import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {

    setFormData((prev) => ({
      ...prev, [event.target.name]: event.target.value
    }
    ));
  }

  function submitHandler(event) {

    event.preventDefault();

    setIsLoggedIn(true);
    toast.success("Logged in Successfully!!");

    const fullData = {
      ...formData
    }

    console.log(fullData);
    navigate("/dashboard");

  }

  return (

    <form onSubmit={submitHandler} >

      <div className='pt-4 pb-2'>

        <div className='flex flex-col gap-y-2'>

          <div className='flex flex-col'>
            <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="email">Email Address <sup className='text-red-600'>*</sup></label>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              type="email"
              id='email'
              name='email'
              onChange={changeHandler}
              value={formData.email}
              placeholder='yuvraj@gmail.com'
              required />
          </div>


          <div className='flex flex-col relative'>
            <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="password">Password <sup className='text-red-600'>*</sup></label>

            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              onChange={changeHandler}
              value={formData.password}
              placeholder='1234'
              required />

            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ?

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </div>
        </div>

        <Link to="#" >
          <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto hover:cursor-pointer'>
            Forgot Password
          </p>
        </Link>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Sign in
        </button>

      </div>

      </form >
  )
}

export default LoginForm