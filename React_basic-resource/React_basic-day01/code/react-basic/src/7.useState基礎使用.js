// useState實現一個計數器按鈕
import { useState } from 'react'
function App () {
  // 1. 呼叫useState新增一個狀態變數
  // count 狀態變數
  // setCount 修改狀態變數的方法
  const [count, setCount] = useState(0)

  // 2. 點選事件回撥
  const handleClick = () => {
    // 作用: 
    // 1. 用傳入的新值修改count
    // 2. 重新使用新的count渲染UI
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App
