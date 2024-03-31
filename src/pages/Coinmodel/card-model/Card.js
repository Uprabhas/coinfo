import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

export default function Card({data}) {
  return (
    <div className='row'>
  {data.map((item, index) => (
    <div className="body col-md-3 p-1 model" key={index}>
      <Link className='navlink' to={`/${item.uuid}` }>
      <div className="container">
      <div className="card" style={{background: item.color}}>
            <div className="imgBx">
                <img src={item.iconUrl}/>
            </div>
            <div className="contentBx">
                <h2>{item.name}</h2>
                <a href="#">remove</a>
            </div>
        </div>
    </div>
    </Link>
    </div>
  ))}
</div>

  )
}
