import { configureStore } from "@reduxjs/toolkit"
// 匯入子模組reducer
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer
  }
})

export default store