import React from 'react'
import "./stats.css"

const Stats = ({stats}) => {
  return (
      <div className='value-stats-container'>
       {stats.map(({icon,title,value}) => (
        <div key={title}>
        <div  className='coin-stats'>
            <div className='stat-name'>
                <span>{icon}</span>
                <span>{title}</span>
            </div>
            <span>{value}</span>   
        </div>
        <div className='line' style={{width : "100%"}}></div> 
        </div>
        ))} 
    </div> 
    
    
  )
}

export default Stats