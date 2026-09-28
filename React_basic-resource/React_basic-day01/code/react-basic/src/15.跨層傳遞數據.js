// App -> A -> B

import { createContext, useContext } from "react"

// 1. createContext方法創建一個上下文對象

const MsgContext = createContext()

// 2. 在頂層組件 通過Provider組件提供數據

// 3. 在底層組件 通過useContext鉤子函數使用數據

function A () {
  return (
    <div>
      this is A component
      <B />
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B compnent,{msg}
    </div>
  )
}

function App () {
  const msg = 'this is app msg'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is App
        <A />
      </MsgContext.Provider>
    </div>
  )
}

export default App
