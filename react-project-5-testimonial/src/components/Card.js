import React from 'react'
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { IoIosArrowBack , IoIosArrowForward  } from "react-icons/io";

const Card = (props) => {

    let user = props.user;
    let setUserId = props.setUserId;
    let usersLength = props.usersLength;

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 5) + 1; // Generates a number between 1 and 5
        return randomNumber;
      };

    return (
        <div className='max-h-[450px]'>
            <div className='relative'>
                <img className='rounded-full h-28 w-28 absolute -top-14 left-10 z-10' src={user.image} alt="" />
                <div className='rounded-full bg-purple-400 absolute -top-16 left-12 w-28 h-28'></div>
            </div>

            <div className='flex-wrap relative top-14 flex flex-col px-10 justify-between items-center h-full gap-6 max-h-full'>

                <div className='flex flex-col items-center' >
                    <h2 className='font-bold text-xl'>{user.name}</h2>
                    <h4 className='font-semibold text-purple-300 text-sm'>{user.job.toUpperCase()}</h4>
                </div>

                <div className='flex flex-col items-center gap-4 text-slate-500'>
                    <FaQuoteLeft color='rgb(192 132 252 / var(--tw-bg-opacity))' />
                    {user.text}
                    <FaQuoteRight color='rgb(192 132 252 / var(--tw-bg-opacity))' />
                </div>

                <div className='flex gap-4'>
                    <button onClick={() => setUserId(user.id > 1 ? user.id - 1 : usersLength)}> <IoIosArrowBack color='rgb(192 132 252 / var(--tw-bg-opacity))' size={25}/> </button>
                    <button onClick={() => setUserId(user.id < usersLength ? user.id + 1 : 1)}><IoIosArrowForward color='rgb(192 132 252 / var(--tw-bg-opacity))' size={25} /></button>
                </div>

                <div>
                    <button className='bg-purple-400 rounded-md py-2 px-8 text-white font-bold' onClick={() => setUserId(generateRandomNumber())} >Surprise me</button>
                </div>
            </div>
        </div>
    )
}

export default Card