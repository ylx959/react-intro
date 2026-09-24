//項目的入口 從這裡開始運行

//react 必要的兩個核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//導入項目根組件
import App from './App';

//把App跟組見炫染到id 為root 的dom 節點上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


