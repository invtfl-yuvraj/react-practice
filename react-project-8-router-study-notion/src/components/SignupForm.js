import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
    });

    const [accountType, setAccountType] = useState("student");
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }
        ));
    }

    function submitHandler(event) {

        event.preventDefault();

        if (formData.createPassword != formData.confirmPassword) {
            toast.error("Password do not match!!");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Logged in Successfully!!");

        const fullData = {
            ...formData, accountType
        }

        console.log(fullData);
        navigate("/dashboard");

    }

    return (

        <div>

            <div className='flex bg-richblack-800 p-1 gap-x-1 mt-4 mb-2 rounded-full max-w-max'>

                <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}

                    onClick={() => setAccountType("student")}>
                    Student
                </button>

                <button className={`${accountType !== "student" ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}

                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler} >

                <div>

                    <div className='flex flex-col gap-y-2'>

                        <div className='flex gap-x-4 mt-[20px] justify-between'>
                            <div className='flex flex-col'>
                                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="firstName">First Name <sup className='text-red-600'>*</sup></label>

                                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                                    type="text"
                                    id='firstName'
                                    name='firstName'
                                    onChange={changeHandler}
                                    value={formData.firstName}
                                    placeholder='Yuvraj'
                                    required />
                            </div>


                            <div className='flex flex-col'>
                                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="lastName">Last Name <sup className='text-red-600'>*</sup></label>

                                <input
                                    type="text"
                                    id='lastName'
                                    name='lastName'
                                    onChange={changeHandler}
                                    value={formData.lastName}
                                    placeholder='Singh'
                                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                                    required />
                            </div>
                        </div>

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


                        <div className='flex justify-between '>
                            <div className='flex flex-col relative'>
                                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="createPassword">Create Password <sup className='text-red-600'>*</sup></label>

                                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                                    type={showCreatePassword ? "text" : "password"}
                                    id='createPassword'
                                    name='createPassword'
                                    onChange={changeHandler}
                                    value={formData.createPassword}
                                    placeholder='1234'
                                    required />

                                <span
                                    className='absolute right-3 top-[38px] cursor-pointer'
                                    onClick={() => setShowCreatePassword((prev) => !prev)}>
                                    {showCreatePassword ?

                                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                                </span>
                            </div>


                            <div className='flex flex-col relative'>
                                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' htmlFor="confirmPassword">Confirm Password <sup className='text-red-600'>*</sup></label>

                                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                                    type={showConfirmPassword ? "text" : "password"}
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    onChange={changeHandler}
                                    value={formData.confirmPassword}
                                    placeholder='1234'
                                    required />

                                <span
                                    className='absolute right-3 top-[38px] cursor-pointer'
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    {showConfirmPassword ?

                                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                                </span>
                            </div>
                        </div>

                        {/* <Link to="#" >
                            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto hover:cursor-pointer'>
                                Forgot Password
                            </p>
                        </Link> */}

                        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                            Create Account
                        </button>

                    </div>

                </div>

            </form>
        </div>
    )
}

export default SignupForm