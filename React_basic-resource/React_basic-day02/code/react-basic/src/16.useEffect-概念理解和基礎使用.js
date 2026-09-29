import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

function App () {
  // 建立一個狀態資料
  const [list, setList] = useState([])
  useEffect(() => {
    // 額外的操作 獲取頻道列表
    async function getList () {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
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
