// useState實現一個計數器按鈕
import { useState } from 'react'
function App () {
  // 1. 調用useState添加一個狀態變量
  // count 狀態變量
  // setCount 修改狀態變量的方法
  const [count, setCount] = useState(0)

  // 2. 點擊事件回調
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
