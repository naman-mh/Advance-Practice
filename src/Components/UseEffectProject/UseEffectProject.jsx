import React from 'react'
import { useEffect,useState } from 'react'

const UseEffectProject = () => {
    const [data , setdata] = useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/USD`)
        .then((res)=>res.json())
        .then((res)=>setdata([currency]))
    },[])
  return (
    <div>
        <h1 className='text-3xl bg-orange-500'>Currency Change Project </h1>
    </div>
  )
}

export default UseEffectProject