// zustand
import { useEffect } from 'react'
import { create } from 'zustand'
const URL = 'http://geek.itheima.net/v1_0/channels'

// store
// counterStore  
// channelStore 
// index.js

// 1. 拆分子模組 再組合起來

const createCounterStore = (set) => {
  return {
    // 狀態資料
    count: 0,
    // 修改狀態資料的方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },
  }
}

const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      set({
        channelList: jsonRes.data.channels
      })
    }
  }
}

const useStore = create((...a) => {
  return {
    ...createCounterStore(...a),
    ...createChannelStore(...a)
  }
})


function App () {
  // 2. 元件使用
  const { count, inc, fetchGetList, channelList } = useStore()
  useEffect(() => {
    fetchGetList()
  }, [fetchGetList])
  return (
    <>
      <button onClick={inc}>{count}</button>
      <ul>
        {
          channelList.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </>
  )
}

export default App