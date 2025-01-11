import { useState } from 'react'
import './App.css'
import UserNavbar from './components/UserNavbar'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router'
import Routers from "./routers/routes.jsx"

const router = createBrowserRouter(Routers)
function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
