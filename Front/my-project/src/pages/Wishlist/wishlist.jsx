  import React, { useContext, useEffect, useState } from 'react'
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { RiHeartAdd2Line } from "react-icons/ri";
import axios from "axios"
import Button from 'react-bootstrap/Button';  
import { FavoritesContext } from '../../context/FavoritesContext';
import Swal from "sweetalert2";


function Wishlist() {
  const  {favorites,setfavorites}=useContext(FavoritesContext)
  return (
    <>
    <div className="services  px-40 pt-20">
        <div className="services_text">
            <span className='text-red-500 text-lg'>Our Top Services</span>
            <h2 className='text-3xl'>Our Best Services</h2>
        </div>
          
        <div className="services_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center  py-10 ">
            {favorites.map((member)=>(
                <div className="serv-card flex flex-col gap-5 items-center text-center py-12 px-4 bg-stone-50"key={member._id}>
                <img src={member.image} alt="" />
                <a href="/add" className='text-blue-700'>{member.name}</a>
                <p>{member.job}</p>
                <Button variant="danger">Danger</Button>
                </div>
            ))}
 
        </div>
    </div>
    </>
  )
}

export default Wishlist
