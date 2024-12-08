import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState } from 'react'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const [clickedButton, SetClickedButton] = useState("");
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-white text-md' >

            <Link to="/" onClick={()=>SetClickedButton("")}> 
                <img src={logo} alt="" width={160} height={32} loading='lazy' /></Link>

            <nav >
                <ul className='flex gap-4 '>
                    <li >
                        <NavLink className="nav-link" to="/" onClick={()=>SetClickedButton("")}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about" onClick={()=>SetClickedButton("")}>
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contact" onClick={()=>SetClickedButton("")}>
                        Content
                        </NavLink>
                    </li>

                </ul>
            </nav>

            <div className='flex gap-4'>

                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button className={` text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border transition-all duration-300 ${clickedButton === "login" ? 'bg-richblack-900 border-richblack-200'  : 'bg-richblack-800 border-richblack-700'}`} 
                    onClick={()=> SetClickedButton("login")}>
                            Login
                        </button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className={` text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border transition-all duration-300 ${clickedButton === "signup" ? 'bg-richblack-900 border-richblack-200' : 'bg-richblack-800 border-richblack-700'}`} 
                    onClick={()=> SetClickedButton("signup")}>
                            Sign up
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out Successfully!!");
                            SetClickedButton("log-out");
                        }} className={` text-richblack-100 py-[8px] 
                            px-[12px] rounded-[8px] border transition-all duration-300 ${clickedButton === "log-out" ? 'bg-richblack-900 border-richblack-200' : 'bg-richblack-800 border-richblack-700'}`}>
                            Log out
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className={` text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border transition-all duration-300 ${clickedButton === "dashboard" ? 'bg-richblack-900 border-richblack-200' : 'bg-richblack-800 border-richblack-700'}`} 
                    onClick={()=> SetClickedButton("dashboard")}>
                            Dashboard
                        </button>
                    </Link>
                }


            </div>
        </div>
    )
}

export default Navbar