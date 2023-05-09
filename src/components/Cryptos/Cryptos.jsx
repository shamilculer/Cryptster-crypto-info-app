import React, { useState,useEffect } from 'react'

import "./cryptos.css"

import { CryptoCard, Loader } from '../index'
import {BsSearch}  from "react-icons/bs"


import { useGetCryptosQuery } from '../../Services/cryptoApi'

  const Cryptos = ({simplified}) => {
   const count = simplified ? 10 : 100
   const {data :cryptoList , isFetching} = useGetCryptosQuery(count)
   const [cryptos , setCryptos] = useState(cryptoList?.data?.coins)
   const [searchTerm, setSearchTerm] = useState("")

   useEffect(() => {
    setCryptos(cryptoList?.data?.coins)
   },[cryptoList])

   useEffect(() => {
    const newList = cryptoList?.data?.coins.filter(crypto => (
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    setCryptos(newList)

   },[searchTerm])
 
  return (
    <>
    {!simplified && (
       <div className='search-section'>
      <input placeholder='Search Crypto currency' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <BsSearch className='search-icon' />
    </div>
    )}

    {isFetching ? <Loader /> : (
      <div className='cards-container'>
        {cryptos?.map(crypto => (
            <CryptoCard crypto={crypto} key={crypto.uuid} />
        ))}
      </div>
    )}
      
    </> 
    
  )
}

export default Cryptos