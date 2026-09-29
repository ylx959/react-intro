// 封裝自定義Hook

// 問題: 布林切換的邏輯 當前元件耦合在一起的 不方便複用

// 解決思路: 自定義hook

import { useState } from "react"

function useToggle () {
  // 可複用的邏輯程式碼
  const [value, setValue] = useState(true)
  //()=> 建立一個函式，但現在先不要執行
  const toggle = () => setValue(!value)

  // 哪些狀態和回撥函式需要在其他元件中使用 return
  return {
    value,
    toggle
  }
}

// 封裝自定義hook通用思路

// 1. 宣告一個以use打頭的函式
// 2. 在函式體內封裝可複用的邏輯（只要是可複用的邏輯）
// 3. 把元件中用到的狀態或者回調return出去（以物件或者陣列）
// 4. 在哪個元件中要用到這個邏輯，就執行這個函式，解構出來狀態和回撥進行使用


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
