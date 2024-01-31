import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api_options, base_URL } from '../../../services/Apiservice';

export default function Coindetail() {

  const [coindatail, setcoindatail] = useState([])

  const{id}=useParams()
  const getdata=async()=>{
    const res =await fetch(base_URL+'/coin/'+id,{
      options:api_options
    })
    const data = await res.json()
    setcoindatail(data)
    console.log(data);

  }

  useEffect(() => {
    getdata()
  
  },[] )
  

  return (
    <div>
        <div className='container-fluid'>
            <div className='header'>
                <div className='title'>
                    Bitcoin{id}
                </div>
            </div>
        </div>
    </div>
  )
}
