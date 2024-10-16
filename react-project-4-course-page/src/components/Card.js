import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';
import { useState } from 'react';

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

    const [readmore, setReadmore] = useState(false);

    function readMoreHandler() {
        return setReadmore(!readmore);
    }

    function clickHandler() {

        if (likedCourses.includes(course.id)) {
            setlikedCourses((prev) => prev.filter((cid) => (cid != course.id)));
            toast.warning("Like removed");
        }
        else {
            if (likedCourses.length === 0) {
                setlikedCourses([course.id]);
            }
            else {
                setlikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }

    }

    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
            <div className='relative'>
                <img src={course.image.url} alt="" />
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"></FcLike> : <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>}
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='font-semibold text-lg text-white leading-6 '>
                    {course.title}
                </p>

                
                <p className='text-white mt-2 '>
                    {!readmore ? `${course.description.substring(0, 100)}....` : course.description}
                </p>

                <span className='text-blue-500 transition-all duration-300' onClick={readMoreHandler}> 
                    {!readmore ? `read more` : `show less`}
                </span>

            </div>
        </div>
    )
}

export default Card 