import React , {useEffect} from 'react'
import {NewsContainer} from "../../components"
import { useDispatch } from 'react-redux'
import { closeNavBar } from '../../app/Slices/navbarSlice/navbarSlice'

const News = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(closeNavBar())
  },[])

  return (
    <main>
      <NewsContainer />
    </main>
  )
}

export default News