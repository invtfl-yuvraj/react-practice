import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHearder = () => {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default MainHearder