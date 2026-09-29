// Class API

import { Component } from "react"

class Counter extends Component {
  // 編寫元件的邏輯程式碼
  // 1. 狀態變數  2. 事件回撥  3.UI(JSX)
  // 1. 定義狀態變數
  state = {
    count: 0
  }

  // 2. 定義事件回撥修改狀態資料
  setCount = () => {
    // 修改狀態資料
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}


function App () {
  return (
    <>
      <Counter />
    </>
  )
}

export default App