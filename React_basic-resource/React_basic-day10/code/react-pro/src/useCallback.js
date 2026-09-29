// useCallback

import { memo, useCallback, useState } from "react"


const Input = memo(function Input ({ onChange }) {
  console.log('子组件重新渲染了')
  return <input type="text" onChange={(e) => onChange(e.target.value)} />
})

function App () {
  // 傳給子元件的函式
  const changeHandler = useCallback((value) => console.log(value), [])
  // 觸發父元件重新渲染的函式
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* 把函式作為prop傳給子元件 */}
      <Input onChange={changeHandler} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
