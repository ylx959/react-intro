// 封裝高階元件
import {getToken} from "@/utils/token";
import {Navigate} from "react-router-dom";

// children是原本要跳轉到的路由元件
export const AuthRoute = ({children}) => {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to='/login' replace/>
  }
}
