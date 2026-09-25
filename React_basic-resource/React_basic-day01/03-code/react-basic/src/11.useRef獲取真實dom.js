// React中獲取DOM

import { useRef } from "react"

// 1. useRef生成ref對象 綁定到dom標簽身上

// 2. dom可用時，ref.current獲取dom
// 渲染完畢之後dom生成之後才可用

function App () {
  const inputRef = useRef(null)
  const showDom = () => {
    console.dir(inputRef.current)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取dom</button>
    </div>
  )
}

export default App
