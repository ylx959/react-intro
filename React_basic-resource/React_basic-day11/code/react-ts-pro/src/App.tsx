// useRef + ts

import { useEffect, useRef } from 'react'

// 1. 獲取dom
// 2. 穩定引用的儲存器（定時器管理）

function App() {
  const domRef = useRef<HTMLInputElement>(null)

  const timerId = useRef<number | undefined>(undefined)

  useEffect(() => {
    // 可選鏈  前面不為空值（null / undefined）執行點運算
    // 型別守衛 防止出現空值點運算錯誤
    domRef.current?.focus()

    timerId.current = setInterval(() => {
      console.log('123')
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  return (
    <>
      <input ref={domRef} />
    </>
  )
}

export default App
