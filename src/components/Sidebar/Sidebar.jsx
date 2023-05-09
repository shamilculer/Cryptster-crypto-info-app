import React from 'react'
import "./sidebar.css"
import {AiFillBulb, AiFillFund, AiFillHome} from "react-icons/ai"
import logo from "../../assets/cryptster.png"
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const isOpen = useSelector(state => state.navBar.isOpen)
  const {pathname} = useLocation()

  return (
    <aside className='sidebar' style={isOpen ? {transform  : "translateX(0%)"} : {}}>
      <Link to="/">
        <div className='sidebar__logo-section flex__center'>
            <div className='sidebar__logo-container'>
                <img src={logo} alt='logo' />
            </div>
            <h1>Cryptster</h1>
        </div>
      </Link>  
      <div className='sidebar__nav'>
        <Link to="/" className={pathname === "/" ? "active__page" : ""} ><AiFillHome /> Home</Link>
        <Link to="/cryptocurrencies" className={pathname === "/cryptocurrencies" ? "active__page" : ""} ><AiFillFund /> Crypto currencies</Link>
        <Link to="/news" className={pathname === "/news" ? "active__page" : ""} ><AiFillBulb /> News</Link>
      </div>
    </aside>
  )
}

export default Sidebar