// 賬單列表相關store

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
  name: 'bill',
  // 資料狀態state
  initialState: {
    billList: []
  },
  reducers: {
    // 同步修改方法
    setBillList (state, action) {
      state.billList = action.payload
    },
    // 同步新增賬單方法
    addBill (state, action) {
      state.billList.push(action.payload)
    }
  }
})

// 解構actionCreater函式
const { setBillList, addBill } = billStore.actions
// 編寫非同步
const getBillList = () => {
  return async (dispatch) => {
    // 編寫非同步請求
    const res = await axios.get('http://localhost:8888/ka')
    // 觸發同步reducer
    dispatch(setBillList(res.data))
  }
}

const addBillList = (data) => {
  return async (dispatch) => {
    // 編寫非同步請求
    const res = await axios.post('http://localhost:8888/ka', data)
    // 觸發同步reducer
    dispatch(addBill(res.data))
  }
}

export { getBillList, addBillList }
// 匯出reducer
const reducer = billStore.reducer

export default reducer