import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'
export const FavoritesContext=createContext()

function FavoritesProvider({children}) {
    const localFav=localStorage.getItem("favorites");
    const [favorites,setFavorites]=useState(localFav ? JSON.parse(localFav) : [])


    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
    },[favorites])

    const value={favorites,setFavorites};

  return (
    <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
