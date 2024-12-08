import React from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const [tag, setTag] = useState("car");
    const {gif, loading, getGifUrl} = useGif(tag);

    return (
        <div className='bg-blue-500 rounded-md border-2 w-1/2 flex flex-col items-center justify-around gap-8 border-slate-800'>

            <h2 className='underline text-xl font-bold mt-4 text-slate-800'>A RANDOM {tag.toUpperCase()} GIF</h2>

            {loading ?
                <Spinner/>
                :
                <img src={gif} alt="A random Gif" loading='lazy' width={450} />
            }

            <input
                className='w-10/12 rounded-md p-1 bg-yellow-400 text-center'
                type="text"
                onChange={ (event) => setTag(event.target.value)}
                value = {tag}
            />
            <button
                onClick={() => getGifUrl(tag)}
                className=' w-10/12 rounded-md p-1 bg-yellow-400 mb-4'>
                Generate
            </button>

        </div>
    )
}

export default Random