// 項目的根組件
// App -> index.js -> public/index.html(root)

const count = 100

function getName () {
  return 'jack'
}

function App () {
  return (
    <div className="App">
      this is App
      {/* 使用引號傳遞字符串 */}
      {'this is message'}
      {/* 識別js變量 */}
      {count}
      {/* 函數調用 */}
      {getName()}
      {/* 方法調用 */}
      {new Date().getDate()}
      {/* 使用js對象 */}
      <div style={{ color: 'red' }}>this is div</div>
    </div>
  )
}

export default App
