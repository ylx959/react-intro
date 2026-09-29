// 封裝高階元件
// 核心邏輯: 有token 正常跳轉  無token 去登入

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

export function AuthRoute ({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'} replace />
  }
}