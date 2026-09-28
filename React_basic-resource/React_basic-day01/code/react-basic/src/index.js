// 項目的入口 從這裡開始運行

// React必要的倆個核心包
import React from 'react'
import ReactDOM from 'react-dom/client'

// 導入項目的根組件
import App from './App'

// 把App根組件渲染到id為root的dom節點上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

