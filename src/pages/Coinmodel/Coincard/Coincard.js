import React from 'react'
import { Link,} from 'react-router-dom'
import './coincard.css'

export default function Coincard({data}) {
    // const api_data = data

  return (
    <div>
         {data.map((item, index) => (
        <section className="box m-2" key={index} >
          <Link className='navlink' to={`/${item.uuid}`} >
          <div className="main">
            {/* coin-view */}
            <div className="row">
              <div className="col-md-1 common">{item?.rank}</div>
              <div className="col-md-3 common">
                <p className="coin m-2">
                  <span className="icon">
                    <img class="report" src={item?.iconUrl} />
                  </span>
                </p>
                <div>
                  <label className="">{item?.name}</label><br/>
                <label className="">{item?.symbol}</label>
                </div>
              </div>
              <div className="col-md-4 pt-3 text-center">${item?.price}</div>
              <div className="col-md-4 pt-3 text-center">${item?.marketCap}</div>
            </div>
          </div>
          </Link>
        </section>
      ))}
    </div>
  )
}
