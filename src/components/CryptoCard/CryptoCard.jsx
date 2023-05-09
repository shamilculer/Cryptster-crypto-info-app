import React from 'react'
import "./cryptocard.css"

import millify from 'millify'
import { Link } from 'react-router-dom'

const CryptoCard = ({crypto : {uuid, rank, name, iconUrl, price, marketCap, change}}) => {

  return (
   <article className='card'>
    <Link to={`/crypto/${uuid}`}>
        <div className='card-top'>
            <div className='crypto-name'>
                <span>{rank}.</span>
                <h3>{name}</h3>
            </div>
            <div className='crypto-img'>
                <img src={iconUrl} />
            </div>
        </div>
        <div className='line'></div>
        <div className='card-bottom'>
            <p>Price :  {millify(price)}</p>
            <p>Market Cap :  {millify(marketCap)}</p>
            <p>Daily Change :  {millify(change)}</p>
        </div>
    </Link>
   </article>
  )
}

export default CryptoCard