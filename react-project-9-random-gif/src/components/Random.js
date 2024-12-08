import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const {gif, loading, getGifUrl} = useGif();

    return (
        <div className='bg-green-500 rounded-md border-2 w-1/2 flex flex-col items-center justify-around gap-8 border-slate-800'>

            <h2 className='underline text-xl font-bold mt-4'>
                A RANDOM GIF
            </h2>

            {loading ?
                <Spinner/>
                :
                <img src={gif} alt="A random Gif" loading='lazy' width={450} />
                
            }

            <button
                onClick={() => getGifUrl()}
                className=' w-10/12 rounded-md p-1 bg-yellow-400 mb-4'>
                Generate
            </button>

        </div>
    )
}

export default Random