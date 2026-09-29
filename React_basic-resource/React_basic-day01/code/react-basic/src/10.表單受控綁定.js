// 受控繫結表單

import { useState } from "react"

// 1. 宣告一個react狀態 - useState

// 2. 核心繫結流程
// 1. 通過value屬性繫結react狀態
// 2. 繫結onChange事件 通過事件引數e拿到輸入框最新的值 反向修改到react狀態身上

function App () {
  const [value,setValue ]=useState('');
  return(
    <div>
      <input/>
    </div>
  )
}

export default App
