// 核心：在子組件中調用父組件中的函數並傳遞實參

import { useState } from "react"

function Son ({ onGetSonMsg }) {
  // Son組件中的數據
  const sonMsg="this is son"
  return(
    <div>this is son
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

//把 getMsg 用 onGetSonMsg 存入
//然後他會傳到Son中,讓Son 使用

function App () {
 
  const[msg,setMsg]=useState('')

  const getMsg=(msg)=>{
    console.log(msg)
    setMsg(msg)
  }
  return(
    <div>
      this is App
      <Son onGetSonMsg={getMsg}/>
    </div>
  )
}

export default App
