// 組合redux子模組 + 匯出store實例

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'

export default configureStore({
  reducer: {
    user: userReducer
  }
})