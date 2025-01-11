import React from 'react'
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

function Services() {
  return (
    <>
    <div className="services  px-40 pt-20">
        <div className="services_text">
            <span className='text-red-500 text-lg'>Our Top Services</span>
            <h2 className='text-3xl'>Our Best Services</h2>
        </div>

        <div className="services_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center  py-10 ">

            <div className="serv-card flex flex-col gap-5 items-center text-center py-12 px-4 bg-stone-50">
            <GrUserSettings className='text-red-500 text-4xl' />
            <a href="/add" className='text-blue-700'>Strategy Planning</a>
            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>

            <div className="serv-card flex flex-col gap-5 items-center text-center py-12 px-4 bg-stone-50">
            <MdOutlineRequestPage  className='text-red-500 text-4xl' />
            <a href="/add" className='text-blue-700'>Strategy Planning</a>
            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>

            <div className="serv-card flex flex-col gap-5 items-center text-center py-12 px-4 bg-stone-50">
            <FaHandshake className='text-red-500 text-4xl' />
            <a href="/add" className='text-blue-700'>Strategy Planning</a>
            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Services
