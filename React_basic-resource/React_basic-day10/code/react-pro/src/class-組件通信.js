// Class API 父子通訊

import { Component } from "react"
// 1. 父傳子  直接通過prop子元件標籤身上繫結父元件中的資料即可
// 2. 子傳父  在子元件標籤身上繫結父元件中的函式，子元件中呼叫這個函式傳遞引數

// 總結
// 1. 思想保持一致
// 2. 類元件依賴於this


// 子元件
class Son extends Component {
  render () {
    // 使用this.props.msg
    return <>
      <div>我是子组件 {this.props.msg}</div>
      <button onClick={() => this.props.onGetSonMsg('我是son组件中的数据')}>sendMsgToParent</button>
    </>
  }
}

// 父元件
class Parent extends Component {
  state = {
    msg: 'this is parent msg'
  }

  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }

  render () {
    return <div>我是父组件<Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} /></div>
  }
}


function App () {
  return (
    <>
      <Parent />
    </>
  )
}

export default App