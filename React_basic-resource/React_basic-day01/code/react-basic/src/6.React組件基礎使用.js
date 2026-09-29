// 1. 定義元件

const Button = () => {
  // 業務邏輯元件邏輯
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 2. 使用元件（渲染元件） */}
      {/* 自閉和 */}
      <Button />
      {/* 成對標簽 */}
      <Button></Button>
    </div>
  )
}

export default App
