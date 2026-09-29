// React.memo

import { memo, useState } from "react"

// 1. 驗證預設的渲染機制  子跟著父一起渲染

// 2. memo進行快取  只有props發生變化的時候才會重新渲染 （不考慮context）

const MemoSon = memo(function Son () {
  console.log('我是子组件，我重新渲染了')
  return <div>this is son</div>
})

// function Son () {
//   console.log('我是子元件，我重新渲染了')
//   return <div>this is son</div>
// }

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      {/* <Son /> */}
      <MemoSon />
    </div>
  )
}

export default App
