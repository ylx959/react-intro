import { useEffect } from 'react'
//useSelector 函數獲取store 中數據
//useDispatch hook 函數獲取 dispatch 方法
import { useDispatch, useSelector } from 'react-redux'
// 匯入actionCreater
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannlList } from './store/modules/channelStore'
function App () {
  //物件解構
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  // 使用useEffect觸發非同步請求執行
  //第一次 mount 後執行；之後如果 dispatch 這個函式的「reference」改變，就再執行
  useEffect(() => {
    dispatch(fetchChannlList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add To 20</button>
      <ul>
      {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
