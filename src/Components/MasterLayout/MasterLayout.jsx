import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <SideNav />
            </div>
            <div className="col-md-10">
                <Outlet />
            </div>
        </div>
    </div>

    </>
  )
}

export default MasterLayout