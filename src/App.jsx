import React, { useState } from 'react'
import "./App.css"

import { Sidebar, MobileNav} from './components'

import routes from './routes'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
        <MobileNav  />
        <Sidebar  />
            <Routes>
              {routes.map((route, index ) => (
                <Route key={index} {...route} />
              ))}
            </Routes>
    </div> 
  )
}

export default App