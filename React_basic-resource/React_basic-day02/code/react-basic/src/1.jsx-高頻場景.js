// 專案的根元件
// App -> index.js -> public/index.html(root)

const count = 100

function getName () {
  return 'jack'
}

function App () {
  return (
    <div className="App">
      this is App
      {/* 使用引號傳遞字串 */}
      {'this is message'}
      {/* 識別js變數 */}
      {count}
      {/* 函式呼叫 */}
      {getName()}
      {/* 方法呼叫 */}
      {new Date().getDate()}
      {/* 使用js物件 */}
      <div style={{ color: 'red' }}>this is div</div>
    </div>
  )
}

export default App
