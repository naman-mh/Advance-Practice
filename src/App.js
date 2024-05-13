import React, { useState } from 'react'
// import Props from './Props';
// import { Props2 } from './Props2';
// import UseEffect from './UseEffect';
import Fetch from './Fetch';

function App() {
    const [count, setCount]=useState(0)
    // const[submit,setsubmit]=useState()
    
  return (
    <>
    {/* <h1>{count}</h1>
    <Props name="naman" btnText="click me "/>
    <Props name="abcdef" btnText="visit me "/> */}
    
    {/* <Props2/> */}
    {/* <UseEffect/> */}
    <Fetch/>
    
    </>
  )
}

export default App;
