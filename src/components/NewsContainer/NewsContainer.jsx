import React, { useEffect, useState } from 'react'
import { useGetNewsQuery } from '../../Services/newsApi'
import { useGetCryptosQuery } from '../../Services/cryptoApi'
import {NewsCard, Loader} from '../index'

const NewsContainer = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const {data : cryptoNews, isFetching} = useGetNewsQuery({newsCategory , count : simplified ? 10 : 100})
  const {data : cryptoList} = useGetCryptosQuery(100)
  const [news, setNews] = useState(cryptoNews?.value)

  useEffect(() => {
    setNews(cryptoNews?.value)
  },[cryptoNews]
  )

    
  return (
    <>
      {!simplified && (
        <div className='select-section'>
          <select onChange={(e) => setNewsCategory(e.target.value)} >
            <option  value={'Cryptocurrency'} >Cryptocurrency</option>
            {cryptoList?.data?.coins.map(coin => (
              <option value={coin.name} key={coin.name} >{coin.name}</option>
            ))}
          </select>
        </div>
      )} 
      {isFetching ? <Loader /> : (
       <div className='cards-container'>
        {news?.map(article => (
          <NewsCard article={article} key={article.datePublished + article.name} />
        ))}
       </div>
      )}
    </>
  )
}

export default NewsContainer