import { useState } from 'react'

function App () {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    // 直接修改 無法引發視圖更新
    // count++
    // console.log(count)
    setCount(count + 1)
  }

  // 修改對象狀態
  const [form, setForm] = useState({ name: 'jack' })

  const changeForm = () => {
    // 錯誤寫法：直接修改
    // form.name = 'john'
    // 正確寫法：setFrom 傳入一個全新的對象
    setForm({
      ...form,
      name: 'john'
    })
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  )
}

export default App
