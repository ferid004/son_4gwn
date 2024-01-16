import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useWish } from '../../context/wishContext'

function Product() {
///
const [wish,setWish,hadlewish]=useWish()
///

    const [product, setproduct] = useState([])
    const axiosAll=async()=>{
        const res=await axios.get('http://localhost:3000/')
        const data=res.data.data
        setproduct(data)
    }
    useEffect(() => {
      axiosAll()
    }, [])
    
    
  return (
    <div>
        <div className="">
            {product &&  product.map((item)=>(
                <ul key={item._id}>
                    <li>{item.name}</li>
                    <li><div className="imgbox"><img src= {item.src} alt="" /></div></li>
                    <li>{item.price}</li>
                    <li><button onClick={()=>hadlewish(item)}>wish</button></li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Product