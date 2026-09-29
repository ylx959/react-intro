// 使用者相關的所有請求
import { request } from "@/utils"
// 1. 登入請求

export function loginAPI (formData) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

// 2. 獲取使用者資訊

export function getProfileAPI () {
  return request({
    url: '/user/profile',
    method: 'GET'
  })
}