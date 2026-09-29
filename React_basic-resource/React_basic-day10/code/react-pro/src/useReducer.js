// useReducer

import { useReducer } from "react"

// 1. 定義reducer函式 根據不同的action 返回不同的狀態

function reducer (state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'SET':
      return action.payload
    default:
      return state
  }
}

// 2. 元件中呼叫useReducer(reducer, 0) => [state, dispatch]

// 3. 呼叫dispatch({type:'INC'}) => 通知reducer產生一個新的狀態 使用這個新狀態更新UI


function App () {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div className="App">
      this is app
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>update</button>
    </div>
  )
}

export default App
