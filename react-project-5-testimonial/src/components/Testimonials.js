import React from 'react'
import Card from './Card'

const Testimonials = (props) => {

    let usersData = props.usersData;
    let userId = props.userId;
    let setUserId = props.setUserId;
    let usersLength = usersData.length;

  return (
    <div className='max-w-[38rem] bg-white h-[450px] rounded-md shadow-md'>
        <Card user = {usersData[userId-1]} setUserId = {setUserId} usersLength = {usersLength}></Card>
    </div>
  )
}

export default Testimonials