import {createSlice} from "@reduxjs/toolkit";
import {cacheToken, getToken, removeToken} from "@/utils/token";
import {getUserProfileApi, loginApi} from "@/apis/user";


const userStore = createSlice({
  name: "user",
  // 資料狀態
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      cacheToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },

    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    },
  }
});

// 解構出actionCreator
const {setToken, setUserInfo, clearUserInfo} = userStore.actions;

// 獲取reducer函式
const userReducer = userStore.reducer;

// 非同步方法封裝
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const result = await loginApi(loginForm)
    dispatch(setToken(result.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const result = await getUserProfileApi()
    dispatch(setUserInfo(result.data))
  }
}

export {fetchLogin, fetchUserInfo, setToken, clearUserInfo}
export default userReducer
