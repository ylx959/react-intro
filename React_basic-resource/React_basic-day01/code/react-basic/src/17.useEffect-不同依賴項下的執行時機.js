import { useEffect, useState } from "react"

function App () {
  // 1. 沒有依賴項  初始 + 元件更新
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('副作用函式執行了')
  // })

  // 2. 傳入空陣列依賴  初始執行一次
  // useEffect(() => {
  //   console.log('副作用函式執行了')
  // }, [])

  // 3. 傳入特定依賴項  初始 + 依賴項變化時執行
  useEffect(() => {
    console.log('副作用函数执行了')
  }, [count])

  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  )
}

export default App
