import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

function App () {
  // 創建一個狀態數據
  //list===[]
  //setlist=修改 list 的函式
  const [list, setList] = useState([])
  // useEffect：render 後執行副作用，例如 API、timer、事件監聽
  useEffect(() => {
    // 額外的操作 獲取頻道列表
    // 要執行的事情
    async function getList () {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])//[] dependencies 依賴陣列
  return ( 
    <div>
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
