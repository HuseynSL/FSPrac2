import React from 'react'
import { Outlet } from 'react-router'
import UserNavbar from '../components/UserNavbar'

function UserRoot() {
  return <>
    <UserNavbar/>
    <Outlet/>
  </>
}

export default UserRoot
