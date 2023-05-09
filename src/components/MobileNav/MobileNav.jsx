import React from 'react'
import "./mobilenav.css"

import { BiMenu } from "react-icons/bi"
import { Link } from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import { navBarChange } from '../../app/Slices/navbarSlice/navbarSlice'

import logo from "../../assets/cryptster.png"

const MobileNav = () => {
    const isOpen = useSelector(state => state.navBar.isOpen)
    const dispatch = useDispatch()

  return (
    <header>
        <div onClick={() => dispatch(navBarChange())} >
            <BiMenu />
        </div>
        <Link to="/">
        <div className='navbar__logo-section flex__center'>
            <div className='navbar__logo-container'>
                <img src={logo} alt='logo' />
            </div>
            <h1>Cryptster</h1>
        </div>
      </Link> 
      <div></div> 
    </header>
  )
}

export default MobileNav