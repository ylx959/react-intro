// App -> A -> B

import { createContext, useContext } from "react"

// 1. createContext方法建立一個上下文物件

const MsgContext = createContext()

// 2. 在頂層元件 通過Provider元件提供資料

// 3. 在底層元件 通過useContext鉤子函式使用資料

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
