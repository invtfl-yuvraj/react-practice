import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex justify-center items-center flex-col min-h-[75vh]'>
        <div className='spinner'></div>
        <p className='text-bgDark text-lg font-semibold'>loading...</p>
    </div>
  )
}

export default Spinner