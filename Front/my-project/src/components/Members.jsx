import React, { useContext, useEffect, useState } from 'react'
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { RiHeartAdd2Line } from "react-icons/ri";
import axios from "axios"
import Button from 'react-bootstrap/Button';  
import { FavoritesContext } from '../context/FavoritesContext';
import Swal from "sweetalert2";



function Members() {
  const {favorites,setFavorites}=useContext(FavoritesContext)
  const [members,setMembers]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/member/')
    .then((res)=>setMembers(res.data))
  },[])


  function handleFavorite(item) {
    let findedFav=favorites.find((fav)=> fav._id===item._id)
    if (findedFav) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This product is already in your favorites!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Added to favorites!",
        showConfirmButton: false,
        timer: 1500,
      });
    setFavorites([...favorites, item]);
    console.log(favorites);
    
  }
  }

  return (
    <>
    <div className="services  px-40 pt-20">
        <div className="services_text">
            <span className='text-red-500 text-lg'>Our Top Services</span>
            <h2 className='text-3xl'>Our Best Services</h2>
        </div>
          
        <div className="services_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center  py-10 ">
            {members.map((member)=>(
                <div className="serv-card flex flex-col gap-5 items-center text-center py-12 px-4 bg-stone-50"key={member._id}>
                <img src={member.image} alt="" />
                <a href="/add" className='text-blue-700'>{member.name}</a>
                <p>{member.job}</p>
                <Button variant="danger">Danger</Button>
                <button onClick={()=>handleFavorite(member)}><RiHeartAdd2Line /></button>
                </div>
            ))}
 
        </div>
    </div>
    </>
  )
}

export default Members
