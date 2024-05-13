import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[submit,setsubmit]=useState()
    useEffect(()=>{
        alert("Button has been clicked")
    },
[submit])
  return (
    <div>
       <button onClick={()=>setsubmit("subscribe")}>Subscribe</button>
        <br/>
        <hr/>
        <button onClick={()=>setsubmit("To")}>To</button>
        <br/>
        <hr/>
        <button onClick={()=>setsubmit("Channel")}>Channel</button><br/>
        <hr/>
        <h1>{submit}</h1>
    </div>
  )
}

export default UseEffect