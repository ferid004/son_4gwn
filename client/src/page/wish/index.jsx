import React from 'react'
import './index.scss'
import { useWish } from '../../context/wishContext'
function Wish() {
  const [wish, setWish, hadlewish] = useWish()
  return (
    <div>
      {wish && wish.map((item) => (
        <ul key={item._id}>
          <li><img src={item.src} alt="" /></li>
          <li>{item.name}</li>
        </ul>
      ))}

    </div>
  )
}

export default Wish