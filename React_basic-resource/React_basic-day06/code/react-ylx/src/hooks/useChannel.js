// 封裝獲取頻道列表的邏輯
import { useState, useEffect } from 'react'
import { getChannelAPI } from '@/apis/article'
function useChannel () {
  // 1. 獲取頻道列表所有的邏輯
  // 獲取頻道列表
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    // 1. 封裝函式 在函式體內呼叫介面
    const getChannelList = async () => {
      const res = await getChannelAPI()
      setChannelList(res.data.channels)
    }
    // 2. 呼叫函式
    getChannelList()
  }, [])
  // 2. 把元件中要用到的資料return出去
  return {
    channelList
  }
}

export { useChannel }