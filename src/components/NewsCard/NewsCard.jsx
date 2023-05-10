import React from 'react'
import "./newscard.css"
import moment from 'moment/moment'

const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const NewsCard = ({article}) => {
 const { name, description, image, provider, datePublished, url } = article

  return (
    <article className='card news-card'>
    <a href={url} target='_blank' rel='noreffer'>
      <div className='card-top'>
        <h4>{name}</h4>
        <div className='news-img'>
          <img src={image?.thumbnail?.contentUrl || demoImg} alt={name} />
        </div>
      </div>
        <div className='card-bottom'>
          <p className='news-description'>{description.length > 200 ? `${description.substring(0,150)}...` : description}</p>
          <div className='publish-details'>
          <div className='provider flex__center' style={{gap : "5px"}}>
            <img src={provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt={provider[0].name} /> 
            <span>{provider[0].name}</span>
          </div>
          <span className='publish-date'>{moment(datePublished).startOf('ss').fromNow()}</span>
          </div>
        </div>
    </a>
   </article>
  )
}

export default NewsCard