// react + ts

import { useState } from 'react'

type User = {
  name: string
  age: number
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  const changeUser = () => {
    setUser(null)
    setUser({
      name: 'jack',
      age: 18,
    })
  }
  // 為了型別安全  可選鏈做型別守衛
  // 只有user不為null（不為空值）的時候才進行點運算
  return <>this is app {user?.age}</>
}

export default App
