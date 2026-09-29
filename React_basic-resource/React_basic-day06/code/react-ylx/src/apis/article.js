// 封裝和文章相關的介面函式

import { request } from "@/utils"

// 1. 獲取頻道列表
export function getChannelAPI () {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

// 2. 提交文章表單

export function createArticleAPI (data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

// 更新文章表單

export function updateArticleAPI (data) {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}


// 獲取文章列表

export function getArticleListAPI (params) {
  return request({
    url: "/mp/articles",
    method: 'GET',
    params
  })
}


// 刪除文章

export function delArticleAPI (id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE'
  })
}


// 獲取文章詳情

export function getArticleById (id) {
  return request({
    url: `/mp/articles/${id}`
  })
}

