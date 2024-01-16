import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/product'
function Home() {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <>home</>
      <div className="">
        <Product></Product>
      </div>
    </div>
  )
}

export default Home