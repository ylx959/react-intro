// zustand
import { useEffect } from 'react'
import { create } from 'zustand'
const URL = 'http://geek.itheima.net/v1_0/channels'

// 1. 建立store
// 語法容易出錯
// 1. 函式引數必須返回一個物件 物件內部編寫狀態資料和方法
// 2. set是用來修改資料的專門方法必須呼叫它來修改資料
// 語法1：引數是函式 需要用到老資料的場景   
// 語法2：引數直接是一個物件  set({ count: 100 })

const useStore = create((set) => {
  return {
    // 狀態資料
    count: 0,
    // 修改狀態資料的方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },
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
})

// 2. 繫結store到元件
// useStore => { count, inc }

function App () {
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