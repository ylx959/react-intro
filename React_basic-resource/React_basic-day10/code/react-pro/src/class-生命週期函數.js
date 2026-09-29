// Class API 生命週期

import { Component, useState } from "react"

class Son extends Component {
  // 宣告週期函式
  // 元件渲染完畢執行一次  傳送網路請求
  componentDidMount () {
    console.log('组件渲染完毕了，请求发送起来')
    // 開啟定時器
    this.timer = setInterval(() => {
      console.log('定时器运行中')
    }, 1000)
  }

  // 元件解除安裝的時候自動執行  副作用清理的工作 清除定時器 清除事件繫結
  componentWillUnmount () {
    console.log('组件son被卸载了')
    // 清除定時器
    clearInterval(this.timer)
  }

  render () {
    return <div>i am Son</div>
  }
}

function App () {
  const [show, setShow] = useState(true)
  return (
    <>
      {show && <Son />}
      <button onClick={() => setShow(false)}>unmount</button>
    </>
  )
}

export default App