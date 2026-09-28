// 受控綁定表單

import { useState } from "react"

// 1. 聲明一個react狀態 - useState

// 2. 核心綁定流程
// 1. 通過value屬性綁定react狀態
// 2. 綁定onChange事件 通過事件參數e拿到輸入框最新的值 反向修改到react狀態身上

function App () {
  const [value,setValue ]=useState('');
  return(
    <div>
      <input/>
    </div>
  )
}

export default App
