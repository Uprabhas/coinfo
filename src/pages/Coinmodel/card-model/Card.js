import React, { useContext } from 'react'
import "./Card.css"
import { GlobalContext } from "../../../Context/context1";
import { Link } from 'react-router-dom'

export default function Card({data}) {
  const {removefromwatchlist} = useContext(GlobalContext)

  return (
    <div className='row'>
  {data.map((item, index) => (
    <div className="body col-md-3 p-1 model" key={index}>
      <div className="container">
      <div className="card" style={{background: item.color}}>
      <Link className='navlink' to={`/${item.uuid}` }>
            <div className="imgBx">
                <img src={item.iconUrl}/>
            </div>
            </Link>
            <div className="contentBx">
                <h2>{item.name}</h2>
                <a onClick={()=>removefromwatchlist(item.uuid)}>remove</a>
            </div>
        </div>
    </div>
    
    </div>
  ))}
</div>

  )
}
