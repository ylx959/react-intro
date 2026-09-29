// React.memo props比較機制

// 1. 傳遞一個簡單型別的prop   prop變化時元件重新渲染

// 2. 傳遞一個引用型別的prop   比較的是新值和舊值的引用是否相等  當父元件的函式重新執行時，實際上形成的是新的陣列引用

// 3. 保證引用穩定 -> useMemo 元件渲染的過程中快取一個值

import { memo, useMemo, useState } from 'react'

const MemoSon = memo(function Son ({ list }) {
  console.log('子组件重新渲染了')
  return <div>this is Son {list}</div>
})


function App () {
  const [count, setCount] = useState(0)

  // const num = 100

  const list = useMemo(() => {
    return [1, 2, 3]
  }, [])

  return (
    <div className="App">
      <MemoSon list={list} />
      <button onClick={() => setCount(count + 1)}>change Count</button>
    </div>
  )
}

export default App
