import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
  name: 'counter',
  // 初始化state
  initialState: {
    count: 0
  },
  // 修改狀態的方法 同步方法 支援直接修改
  reducers: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    addToNum (state, action) {
      state.count = action.payload
    }
  }
})

// 解構出來actionCreater函式
const { increment, decrement, addToNum } = counterStore.actions
// 獲取reducer
const reducer = counterStore.reducer

// 以按需匯出的方式匯出actionCreater
export { increment, decrement, addToNum }
// 以預設匯出的方式匯出reducer
export default reducer