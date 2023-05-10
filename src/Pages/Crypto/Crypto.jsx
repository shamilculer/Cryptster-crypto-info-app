import React, { useEffect, useState } from 'react'
import "./crypto.css"
import { useParams } from 'react-router-dom'
import millify from 'millify'
import {AiFillMoneyCollect, AiFillDollarCircle, AiFillFund, AiFillExclamationCircle, AiFillStop, AiFillTrophy, AiOutlineNumber, AiFillThunderbolt, AiFillCheckCircle} from "react-icons/ai"
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { closeNavBar } from '../../app/Slices/navbarSlice/navbarSlice'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../Services/cryptoApi'
import {Loader, LineChart, Stats} from "../../components"

const Crypto = () => {
  const dispatch = useDispatch()
  const {coinId} = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId)
  const {data : coinHistory} = useGetCryptoHistoryQuery({coinId ,timePeriod})
  const cryptoDetails = data?.data?.coin

  useEffect(() =>{
    dispatch(closeNavBar())
  },[])

  const timePeriods = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <AiFillDollarCircle /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <AiOutlineNumber/> },
    { title: '24h Volume', value: `$ ${cryptoDetails && cryptoDetails["24hVolume"] && millify(cryptoDetails && cryptoDetails["24hVolume"])}`, icon: <AiFillThunderbolt/> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <AiFillDollarCircle /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <AiFillTrophy /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AiFillFund /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AiFillMoneyCollect/> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <AiFillCheckCircle /> : <AiFillStop />, icon: <AiFillExclamationCircle/> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <AiFillExclamationCircle /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <AiFillExclamationCircle /> },
  ];



  return (
    <main>
      {isFetching ? <Loader /> : (
        <>
          <div className='coin-heading'>
            <h1 className='headtxt'>{cryptoDetails.name} ({cryptoDetails.symbol}) Price</h1>
            <p className='heading-description'>{cryptoDetails.description}</p>
          </div>
          <div className='line'></div>
          <section className='select-section' >
            <select defaultValue="default"  onChange={e => setTimePeriod(e.target.value)}>
              <option value="default" disabled  style={{color : "gray"}}>Select Time period</option>
              {timePeriods.map((time, i) => (
                <option key={i} value={time} >{time}</option>
              ))}
            </select>
          </section>
          <section className='chart-section'>
              <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} timePeriod={timePeriod} />
            </section>

            <section className='stats-container'>
              <div className='value-stats-section'>
                <div className='coin-heading'>
                  <h1 className='headtxt'>{cryptoDetails.name} Value Statistics</h1>
                </div>
                <div className='coin-stats-container'>
                  <Stats  stats={stats} />
                </div>
              </div>

              <div className='value-stats-section'>
                <div className='coin-heading'>
                  <h1 className='headtxt'>Other Stats Info</h1>
                </div>
                <div className='coin-stats-container'>
                  <Stats  stats={genericStats} />
                </div>
              </div>
            </section>

            <section className='coin-links'>
              <h1 className='headtxt'>{cryptoDetails.name} Links</h1>
              <div className='links-container'>
                {cryptoDetails.links?.map((link , i) => (
                  
                    <a key={i} className='links' style={{fontWeight : "700",margin : ".8rem"}} href={link.url} target='_blank' rel="noreffer">{link.type.toUpperCase()} <BsArrowRight /></a>
                  
                ))}
              </div>
            </section>
            
        </>
        
      )}
    </main>
  )
}

export default Crypto