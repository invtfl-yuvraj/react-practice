import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams();
  return (
    <div className='flex justify-center items-center text-2xl font-bold p-4 bg-red-200 w-full h-96'>User : {id} </div>
  )
}

export default User