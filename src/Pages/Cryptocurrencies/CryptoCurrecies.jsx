import React , {useEffect} from 'react'
import { Cryptos } from '../../components'
import { useDispatch } from 'react-redux'
import { closeNavBar } from '../../app/Slices/navbarSlice/navbarSlice'

const CryptoCurrecies = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(closeNavBar())
  },[])

  return (
    <main>
      <Cryptos />
    </main>
  )
}

export default CryptoCurrecies