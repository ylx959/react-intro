// 核心：在子元件中呼叫父元件中的函式並傳遞實參

import { useState } from "react"


function Son ({ onGetSonMsg }) {
  // Son元件中的資料
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is Son
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

//把 getMsg 用 onGetSonMsg 存入
//然後他會傳到Son中,讓Son 使用

function App () {
  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div>
      this is App, {msg}
      <Son onGetSonMsg={getMsg} />
    </div>
  )
}

export default App
