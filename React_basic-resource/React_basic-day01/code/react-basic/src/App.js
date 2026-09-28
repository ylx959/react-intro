// 封裝自定義Hook

// 問題: 布爾切換的邏輯 當前組件耦合在一起的 不方便複用

// 解決思路: 自定義hook

import { useState } from "react"

function useToggle () {
  // 可複用的邏輯代碼
  const [value, setValue] = useState(true)

  const toggle = () => setValue(!value)

  // 哪些狀態和回調函數需要在其他組件中使用 return
  return {
    value,
    toggle
  }
}

// 封裝自定義hook通用思路

// 1. 聲明一個以use打頭的函數
// 2. 在函數體內封裝可複用的邏輯（只要是可複用的邏輯）
// 3. 把組件中用到的狀態或者回調return出去（以對象或者數組）
// 4. 在哪個組件中要用到這個邏輯，就執行這個函數，解構出來狀態和回調進行使用


function App () {
  const { value, toggle } = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App
