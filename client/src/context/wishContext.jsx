import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";



export const wishContext = createContext()

export const WishProvider = ({ children }) => {
    const [wish, setWish] = useLocalStorage('wishh')
    function hadlewish(item) {
        const index=wish.findIndex(x=>x._id===item._id)
        if (index===-1) {
            setWish([...wish,item])
            return 
        }
        setWish(wish.filter(x=>x._id!==item._id))

    }


    const data=[wish,setWish,hadlewish]

    return (
        <wishContext.Provider value={data}>
            {children}
        </wishContext.Provider>
    )
}

export const useWish=()=>useContext(wishContext)