// 核心：在子組件中調用父組件中的函數並傳遞實參

import { useState } from "react"

function A({onGetAName}){
  const name = 'this is A name'
  return(
    <div>
      this is A compnent,
      <button onClick={()=>onGetAName(name)}>send</button> 
    </div>
  )
  
}

function B(props){
    return (
    <div>
      this is B compnent,
      {props.name}
    </div>
  )
}

function App () {
   const[name,setName]=useState('');
   const getName=(name)=>{
    console.log(name)
    setName(name)
   }
  
  return(
    <div>
      this is App
      <A onGetAName={getName}/>
      <B name={name}/>
    </div>
  )
}

export default App
