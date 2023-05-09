import React from 'react'
import "./home.css"
import {BsArrowRight} from "react-icons/bs"
import millify from 'millify'
import { useGetCryptosQuery } from '../../Services/cryptoApi'
import { Link } from 'react-router-dom'
import { Cryptos, NewsContainer, Loader } from '../../components'



const Home = () => {

  const {data, isFetching } = useGetCryptosQuery(10)

  const globalStats = data?.data?.stats

 return(
    <main>
      {isFetching ? <Loader /> : (
        <>
        <div className='title-container'>
          <h1 className='headtxt'>Global crypto stats</h1>
      </div>
      <section className='crypto__stats'>
          <div className='stats flex__center'>

            <div className='stat flex__center'>
              <h3>Total Cryptocurrecies</h3>
              <span>{millify(globalStats.totalCoins)}</span>
            </div>
            <div className='stat flex__center'>
              <h3>Total Exchanges</h3>
              <span>{millify(globalStats.totalExchanges)}</span>
            </div>
            <div className='stat flex__center'>
              <h3>Total Market Cap</h3>
              <span>{millify(globalStats.totalMarketCap)}</span>
            </div>
            <div className='stat flex__center'>
              <h3>Total 24h Volume</h3>
              <span>{millify(globalStats.total24hVolume)}</span>
            </div>
            <div className='stat flex__center'>
              <h3>Total Markets</h3>
              <span>{millify(globalStats.totalMarkets)}</span>
            </div>

          </div>
      </section>

      <section className='home_crypto-container'>
        <div className='title-container'>
          <h1 className='headtxt'>Top 10 Cryptocurrencies in the world</h1>
          <Link className='links' to="/cryptocurrencies">Show More <BsArrowRight /></Link>
        </div>

        <Cryptos simplified />  

      </section>

      <section className="home_news-container">
        <div className='title-container'>
          <h1 className='headtxt'>Latest crypto News</h1>
          <Link className='links' to="/news">Show More <BsArrowRight /></Link>
        </div>

        <NewsContainer simplified />

      </section>
      </>
    )}
    </main> 
 )
}

export default Home