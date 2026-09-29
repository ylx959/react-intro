// 編寫store

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodsList: [],
    // 選單啟用下標值
    activeIndex: 0,
    // 購物車列表
    cartList: []
  },
  reducers: {
    // 更改商品列表
    setFoodsList (state, action) {
      state.foodsList = action.payload
    },
    // 更改activeIndex
    changeActiveIndex (state, action) {
      state.activeIndex = action.payload
    },
    // 新增購物車
    addCart (state, action) {
      // 是否新增過？以action.payload.id去cartList中匹配 匹配到了 新增過
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    // count增
    increCount (state, action) {
      // 關鍵點：找到當前要修改誰的count id
      const item = state.cartList.find(item => item.id === action.payload.id)
      item.count++
    },
    // count減
    decreCount (state, action) {
      // 關鍵點：找到當前要修改誰的count id
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item.count === 0) {
        return
      }
      item.count--
    },
    // 清除購物車
    clearCart (state) {
      state.cartList = []
    }
  }
})

// 非同步獲取部分
const { setFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCart } = foodsStore.actions
const fetchFoodsList = () => {
  return async (dispatch) => {
    // 編寫非同步邏輯
    const res = await axios.get('http://localhost:3004/takeaway')
    // 呼叫dispatch函式提交action
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList, changeActiveIndex, addCart, increCount, decreCount, clearCart }

const reducer = foodsStore.reducer

export default reducer